const express = require("express");
const mongoose = require("mongoose");
const app = express();
const User = require("./model/user");

// Middlewares
// For incoming post req

app.use(
  express.urlencoded({
    extended: false,
  })
);
app.use(express.json());

// Database Connection
mongoose
  .connect("mongoURI: mongodb://localhost:27017/uplift", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

// CreateUser
app.post("/createUser", (req, res) => {
  const user = new User({
    ...req.body,
  });
  console.log(user);

  user
    .save()
    .then((addedUser) => {
      console.log(addedUser);
      res.json({ user: addedUser });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: "Error" });
    });
});

// getUser
app.get("/getUser", (req, res) => {
  User.find()
    .then((users) => {
      res.json({ users });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: "Error" });
    });
});

app.get("/getUserByID/:id", (req, res) => {
  User.findById(req.params.id)
    .then((users) => {
      res.json({ users });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: "Error" });
    });
});

app.put("/editUser/:id", async (req, res) => {
  const { name } = req.body;
  User.findByIdAndUpdate(
    req.params.id,
    {
      name,
    },
    { new: true }
  )
    .then((user) => {
      res.json({ user });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: "Error" });
    });
});

app.post("/deleteUserByID/:id", (req, res) => {
  User.findByIdAndDelete(req.params.id)
    .then((users) => {
      res.json({ users });
      console.log("User Deleted..!!");
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: "Error" });
    });
});

// Port
app.listen(4000, () => console.log("Server is Running..!!"));
