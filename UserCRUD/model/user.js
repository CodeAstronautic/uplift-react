const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      requred: true,
    },
    email: {
      type: String,
      requred: true,
    },
    gender: {
      type: String,
      requred: true,
    },
    age: {
      type: Number,
      requred: true,
    },
    contactNumber: {
      type: Number,
      requred: true,
    },
    qualification: {
      type: String,
      requred: true,
    },
    address: {
      type: String,
      requred: true,
    },
  },
  { timestamps: true }
);

module.exports = User = mongoose.model("user", userSchema);
