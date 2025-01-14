const express = require("express");
import router from "./routes/jobRoutes";

const app = express();

app.use(express.json());
app.use("/jobs", router);

export default app;
