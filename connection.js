const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect(
  // `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PW}@cluster0.k6xrj.mongodb.net/chatApp?retryWrites=true&w=majority`,
  `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PW}@cluster0.lryqd.mongodb.net/chatApp?retryWrites=true&w=majority`,
  () => {
    console.log("connected to mongodb");
  }
);
