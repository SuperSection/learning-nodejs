const express = require("express");
const router = express.Router();
const middleware = require("./middleware");

router.use(middleware);

router.get("/", (req, res) => {
  // res.sendFile(`${pathDir}/index.html`);
  res.render("index", {
    title: "Index Page",
  });
});
router.get("/home", (req, res) => {
  // res.sendFile(`${pathDir}/home.html`);
  res.render("home", {
    title: "Home Page",
  });
});
router.get("/download", (req, res) => {
  // res.download(`${pathDir}/index.html`);
});

module.exports = router;
