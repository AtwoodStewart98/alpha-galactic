const express = require("express");
const bodyParser = require("body-parser");
const passport = require("passport");
const cors = require("cors");
const massive = require("massive");
const session = require("express-session");

const config = require("./config.js");

const port = 4200;

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use(
  session({
    secret: config.secret,
    resave: false,
    saveUninitialized: false
  })
);

// app.use(passport.initialize());
// app.use(passport.session());

app.get("/generateWeapon", (req, res, next) => {
  const weapons = app.get("weapons");
  let spawnedWeapon = {};
  weapons.then(response => {
    console.log(response);
    JSON.parse(response);
  });
});

app.listen(port, () => {
  console.log(`It's Over ${port}!`);
});
