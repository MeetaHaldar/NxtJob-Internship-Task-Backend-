import { Request, Response } from "express";
import {
  getAllJobs,
  getJobById,
  createJob,
  updateJob,
  deleteJob,
} from "../models/jobModel";

export const fetchAllJobs = async (_req: Request, res: Response) => {
  try {
    const jobs = await getAllJobs();
    res.status(200).json(jobs);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch jobs", details: error });
  }
};

export const fetchJobById = async (req: Request, res: Response) => {
  try {
    const job = await getJobById(parseInt(req.params.id));
    if (!job) {
      return res.status(404).json({ error: "Job not found" });
    }
    res.status(200).json(job);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch job", details: error });
  }
};

export const addJob = async (req: Request, res: Response) => {
  try {
    const jobId = await createJob(req.body);
    res.status(201).json({ id: jobId, ...req.body });
  } catch (error) {
    res.status(500).json({ error: "Failed to create job", details: error });
  }
};

export const modifyJob = async (req: Request, res: Response) => {
  try {
    const updatedRows = await updateJob(parseInt(req.params.id), req.body);
    if (!updatedRows) {
      return res.status(404).json({ error: "Job not found" });
    }
    res.status(200).json({ message: "Job updated successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to update job", details: error });
  }
};

export const removeJob = async (req: Request, res: Response) => {
  try {
    const deletedRows = await deleteJob(parseInt(req.params.id));
    if (!deletedRows) {
      return res.status(404).json({ error: "Job not found" });
    }
    res.status(200).json({ message: "Job deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete job", details: error });
  }
};
