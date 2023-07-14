const express = require("express");
const path = require("path");

const app = express();

/* 
const pathDir = path.join(__dirname, "public");
app.use(express.static(pathDir));   // always find the index file and show the result as default page
 */

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  // res.sendFile(`${pathDir}/index.html`);
  res.render("index", {
    title: "Index Page",
  });
});
app.get("/home", (req, res) => {
  // res.sendFile(`${pathDir}/home.html`);
  res.render("home", {
    title: "Home Page",
  });
});
app.get("/download", (req, res) => {
  // res.download(`${pathDir}/index.html`);
});

app.listen(3000, () => {
  console.log("Server is established on port 3000");
});
