const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const session = require("express-session");
const { secret } = require("./config");

const port = 3200;

const app = express();

app.use(bodyParser.json());

const corsOptions = {
  origin: "http://localhost:3200"
};

app.use(cors(corsOptions));

app.use(
  session({
    secret,
    saveUninitialized: true,
    resave: true
  })
);

const profileRoutes = require("./controllers/profileCtrl");
const userRoutes = require("./controllers/userCtrl");

app.use("/", express.static(__dirname + "/public"));

app.post("/api/login", userRoutes.login);

app.get("/api/profiles", profileRoutes.getFriendsProfiles);

app.listen(port, (req, res, next) => {
  console.log(`Listening on Port: ${port}`);
});
