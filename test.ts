const express = require("express"); // CommonJS syntax

const app = express();

app.get("/", (req: any, res: any) => {
  res.send("Express is working!");
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
