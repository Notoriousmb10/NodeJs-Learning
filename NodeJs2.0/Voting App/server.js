const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const app = express();
mongoDBURL = "mongodb://localhost:27017/VotingApp";

app.use('/', (req, res)=> {
    res.send("Hello World");
})

app.use('/', Router)


mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("Connected to database");
    app.listen(process.env.PORT);
    console.log("Server started");
  });

