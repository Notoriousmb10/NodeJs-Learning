const mongoose = require("mongoose");

async function connectMongoDb() {
  return mongoose
    .connect("mongodb://localhost:27017/nodedbs")
    .then(() => console.log("Connected Successfully"));
}
