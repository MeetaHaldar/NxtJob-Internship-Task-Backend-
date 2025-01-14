import app from "./app";
const PORT = process.env.PORT || 30000;

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
