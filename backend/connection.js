const mongoose = require("mongoose");
require("dotenv").config();

const MONGODB_URI = process.env.MONGODB_URI;

mongoose.connect(MONGODB_URI, {
  retryWrites: true,
  w: "majority",
}, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("connected to mongodb");
  }
});