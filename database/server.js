const express = require("express");
const app = express();
const user = require("./connection");

// Requests: post, get, patch, delete
/*  
    POST - sends data to database
    GET - gets the data from database
    PATCH - updates the existing data in database
    DELETE - deletes the data from database
*/

app.use(express.json());

app.post("/", async (req, res) => {
  try {
    const sendData = new user(req.body);
    const saveData = await sendData.save();
    res.send(saveData);
  } catch (error) {
    res.status(404).send(error);
  }
  // res.send("Love you Pagli");
});

app.get("/user", async (req, res) => {
  try {
    const getData = await user.find({});
    res.send(getData);
  } catch (error) {
    res.status(404).send(error);
  }
});

app.get("/user/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const getDataById = await user.findById({ _id: id });
    res.send(getDataById);
  } catch (error) {
    res.status(404).send(error);
  }
});

app.post("/login", async (req, res) => {
  try {
    const userEmail = req.body.email;
    const getEmail = await user.findOne({ email: userEmail });
    res.send(getEmail);
  } catch (error) {
    res.status(404).send(error);
  }
});

app.patch("/update/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const updateData = await user.findByIdAndUpdate({ _id: id }, req.body, {
      new: true,
    });
    res.send(updateData);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.delete("/delete/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const deleteData = await user.findByIdAndDelete({ _id: id });
    res.send(deleteData);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.listen(3000, () => {
  console.log("Server successfully listening on port 3000");
});
