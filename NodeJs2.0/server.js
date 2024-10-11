const express = require("express");
const app = express();
const PORT = 3001;
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const Router = require("./Route/routes");
const mongoose = require("mongoose")
const crytpo = require('crypto')

app.use(express.json())

app.use("/", Router);

app.get('/',  (req, res) => {
  res.send('Hello World!')
})


app.use(passport.initialize())
// app.use(passport.session())

mongoDBURL = "mongodb://localhost:27017/hotel";
mongoose.connect(mongoDBURL).then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
  console.log("Connected to MongoDB");
});
