const mongoose = require("mongoose");

async function connectMongoDb(url) {
  return mongoose
    .connect(url)
    .then(() => console.log("Connected Successfully"));
}

module.exports = {
  connectMongoDb,
};
