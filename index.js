const data = require("./MOCK_DATA.json");
const app = express();
const fs = require("fs");
const userRouter = require('./routes/user')




  //Plugins

app.use(express.urlencoded({ extended: false }));
app.use((req, res, next) => {
  console.log("Security check done.");
  if (req.url === "favicon.ico") {
    res.end("Bas hogya tera ab :)");
  }
  fs.appendFile("log.txt", `\nTime: ${Date.now()} : ${req.url}`, (err) =>
    console.log(err)
  );

  next();
});
app.use((req, res, next) => {
  console.log("Access Granted");
  res.header({ "X-Name": "Yash" });
  next();
});


//routes
app.use('/users', userRouter)



//start
app.listen(8000, () =>
  console.log("Server Started At Port 8000, https//:localhost:8000")
);
