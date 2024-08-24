// const data = require("./MOCK_DATA.json");
const express = require('express');
const app = express();
const userRouter = require("./routes/user");
const { connectMongoDb } = require("./connections");
const { logReqRes } = require("./middleware/index");

//Plugins
connectMongoDb("mongodb://localhost:27017/nodedbs").then(()=> console.log('MongoDB connected :)'))

//middleware & routes
app.use(express.urlencoded({extended:false}))
app.use(logReqRes("log.txt"));
app.use("/", userRouter);

//start
app.listen(8000, () =>
  console.log("Server Started At Port 8000, https//:localhost:8000")
);
