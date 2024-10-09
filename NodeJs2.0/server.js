const express = require("express");
const app = express();
const PORT = 3001;
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const Router = require("./Route/routes");
const mongoose = require("mongoose");
app.get("/", (req, res) => {
  res.send("Hello");
});
app.use(express.json());
app.use("/", Router);

mongoDBURL = "mongodb://localhost:27017/hotel";

mongoose.connect(mongoDBURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(()=> {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
  console.log("Connected to MongoDB");
})