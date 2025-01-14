import pool from "../config/db";

export const getAllJobs = async () => {
  const [rows] = await pool.query("SELECT * FROM jobs");
  return rows;
};

export const getJobById = async (id: number) => {
  const [rows] = await pool.query("SELECT * FROM jobs WHERE id = ?", [id]);
  return rows[0];
};

export const createJob = async (job: {
  title: string;
  company: string;
  location: string;
  salary: number;
  description: string;
}) => {
  const { title, company, location, salary, description } = job;
  const [result] = await pool.query(
    "INSERT INTO jobs (title, company, location, salary, description) VALUES (?, ?, ?, ?, ?)",
    [title, company, location, salary, description]
  );
  return (result as any).insertId;
};

export const updateJob = async (
  id: number,
  job: {
    title: string;
    company: string;
    location: string;
    salary: number;
    description: string;
  }
) => {
  const { title, company, location, salary, description } = job;
  const [result] = await pool.query(
    "UPDATE jobs SET title = ?, company = ?, location = ?, salary = ?, description = ? WHERE id = ?",
    [title, company, location, salary, description, id]
  );
  return (result as any).affectedRows;
};

export const deleteJob = async (id: number) => {
  const [result] = await pool.query("DELETE FROM jobs WHERE id = ?", [id]);
  return (result as any).affectedRows;
};
