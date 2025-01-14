# Job Board API

## Setup and Running Instructions

### Prerequisites
1. Install [Node.js](https://nodejs.org/).
2. Install [MySQL](https://dev.mysql.com/downloads/installer/).

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/MeetaHaldar/NxtJob-Internship-Task-Backend-.git
   cd NxtJob-Internship-Task-Backend-
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure the database:
   - Create a MySQL database named `job_board`.
   - Update the `.env` file with your database credentials:
     ```env
     DB_HOST=localhost
     DB_USER=root
     DB_PASSWORD=yourpassword
     DB_NAME=job_board
     ```

4. Run database migrations to set up the tables:
   ```bash
   npm run migrate
   ```

5. Start the development server:
   ```bash
   npm run dev
   ```

6. Access the API at `http://localhost:3000`.

---

## Design and Decisions

1. **MVC Pattern**: The application is structured using the MVC (Model-View-Controller) pattern, which separates concerns and improves maintainability.

2. **TypeScript**: TypeScript is used to ensure strong typing, improving code quality and reducing runtime errors.

3. **MySQL**: The database choice is MySQL for its robust support for relational data and its popularity in the industry.

4. **Error Handling**: The API includes comprehensive error handling, ensuring meaningful responses for both successful and failed requests.

5. **Scalability**: The design of the project enables future scalability, allowing additional features and routes to be added easily.
