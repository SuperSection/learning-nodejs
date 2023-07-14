// mostly used for authorization

function ageDetector(req, res, next) {
  if (req.query.age > 18) {
    next();
  } else {
    res.send("You are too young to enter into this website");
  }
}

module.exports = ageDetector;
