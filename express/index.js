const express = require("express");
const path = require("path");

const app = express();

const pathDir = path.join(__dirname, "public");
app.use(express.static(pathDir));   // always find the index file and show the result as default page

app.get("/", (req, res) => {
  res.sendFile(`${pathDir}/index.html`);
});
app.get("/about", (req, res) => {
  res.sendFile(`${pathDir}/home.html`);
});
app.get("/download", (req, res) => {
  res.download(`${pathDir}/index.html`);
});

app.listen(3000, () => {
  console.log("Server is established on port 3000");
});
