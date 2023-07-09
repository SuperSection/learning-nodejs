const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hi, this is first express route");
});
app.get("/about", (req, res) => {
  res.send("Here, this is first about route using express");
});
app.get("/download", (req, res) => {
  res.send("This is the download route using express");
});

app.listen(3000, () => {
    console.log("Server is established on port 3000");
})