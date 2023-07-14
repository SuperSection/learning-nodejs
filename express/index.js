const express = require("express");
const path = require("path");

const app = express();
const router = require("./router");

/* 
const pathDir = path.join(__dirname, "public");
app.use(express.static(pathDir));   // always find the index file and show the result as default page
 */

app.set("view engine", "ejs");

app.use(router);

app.listen(3000, () => {
  console.log("Server is established on port 3000");
});
