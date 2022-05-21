const express = require("express");
const chalk = require("chalk");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const mongoose = require("mongoose");
const cors = require("cors");
const keys = require("./config/keys");
require("dotenv").config();
const authRouter = require("./routes/auth");
const userRouter = require("./routes/user");
const postRouter = require("./routes/post");
const categoryRouter = require("./routes/category");
const path = require("path");

const app = express();
const port = process.env.PORT || 8000;

//middleware setups
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
  session({
    secret: "blog",
    resave: true,
    saveUninitialized: true,
  })
);
app.use(express.static(path.join(__dirname, "public")));

//database setup
mongoose.connect(keys.MONGO_URI, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true,
});
const db = mongoose.connection;
db.on("error", () => console.log("error connecting to database"));
db.once("open", () =>
  console.log(`connected to ${chalk.magenta("fullstack-blog database")}`)
);

// routes setups
app.get("/", (req, res) => {
  res.send("welcome to my month of turn around");
});
app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);
app.use("/api/post", postRouter);
app.use("/api/category", categoryRouter);

app.listen(port, () => console.log(`listening on port ${chalk.magenta(8000)}`));
