const express = require("express");
const path = require("path");
const session = require("express-session");
const passport = require("passport");
const Auth0Strategy = require("passport-auth0");
const dotenv = require("dotenv").config();
const mysql = require('mysql')
const { json } = require("body-parser");
const cors = require("cors");

// PRODUCTION
// const config = require("./config.js");
// const { secret, dbUser, database, domain, clientID, clientSecret } = config;

// localhost
const connectionString = mysql.createConnection({
  host: "localhost",
  user: process.env.DB_USER,
  password: process.env.DB_PWD,
  database: process.env.DATABASE,
  insecureAuth: true
})

connectionString.connect(function(err) {
  if (err) throw err;
  console.log("Connected!")
})

class Database {
  constructor(connectionString) {
    this.connection = mysql.createConnection(connectionString)
  }
  query(sql, args) {
    return new Promise((res, rej) => {
      this.connection.query(sql, args, (err, rows) => {
        if (err) return rej(err)
        res(rows)
      })
    })
  }
  close() {
    return new Promise((res, rej) => {
      this.connection.end(err => {
        if (err) return rej(err)
        res()
      })
    })
  }
}

const app = express();
const port = process.env.PORT || 4200;

app.use(express.static(`${__dirname}/../build`));

app.use(cors());
app.use(json());

app.use(
  session({
    secret: process.env.SECRET,
    cookie: {},
    resave: false,
    saveUninitialized: false
  })
);

app.use(passport.initialize());
app.use(passport.session());

passport.use(
  new Auth0Strategy(
    {
      domain: process.env.DOMAIN,
      clientID: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      callbackURL: "/auth",
      scope: "openid profile"
    },
    (accessToken, refreshToken, extraParams, profile, done) => {
      console.log(profile);
      connectionString.query('SELECT * FROM `users` WHERE `authid` = ?', [profile.id], function (err, results, fields) {
        if (err) throw err;
        console.log(results)
        if (results === undefined || results.length == 0) {
          connectionString.query('INSERT INTO `users` (authid, username) VALUES (?, ?)', [profile.id, profile.displayName], function (err, results, fields) {
            if (err) throw err;
            console.log(`USER CREATED`);
          })
          connectionString.query('SELECT * FROM `users` WHERE `authid` = ?', [profile.id], function(err, results, fields) {
            if (err) throw err;
            console.log(`RETRIEVED USER: ${results[0]}`);
            console.log(results[0])
            return done(err, results[0]);
          })
        } else {
          console.log(`FOUND USER: ${results[0]}`);
          console.log(results[0])
          return done(err, results[0]);
        }
      })
    }
  )
);

passport.serializeUser((user, done) => {
  console.log("serializeUser: ", user);
  done(null, user);
});

passport.deserializeUser((obj, done) => {
  console.log("deserializeUser: ", obj);
  done(null, obj);
});

app.get(
  "/auth",
  passport.authenticate("auth0", {
    failureRedirect: "http://localhost:3000/#/login"
  }),
  (req, res) => {
    res.redirect(`http://localhost:3000/#/`);
  }
);

app.get("/api/me", (req, res) => {
  if (req.user) res.status(200).json(req.user);
  else res.status(500).json({ message: "Please login" });
});

app.get("/auth/logout", (req, res) => {
  req.session.destroy(() => {
    res.redirect("http://localhost:3000/#/login");
  });
});

app.post("/saveCharacter", (req, res, next) => {
  console.log("REQUEST BODY:")
  console.log(req.body);
  connectionString.query(`INSERT INTO saved_chars (userid, name, race, alignment, training, faction, description) VALUES (?, ?, ?, ?, ?, ?, ?)`, [
    req.body.user.id,
    req.body.charName,
    req.body.race,
    req.body.alignment,
    req.body.training,
    req.body.faction,
    req.body.charDesc
  ], function (err, results, fields) {
    if (err) throw err;
  })
  connectionString.query(`SELECT * FROM saved_chars WHERE userid = ? AND name = ? AND race = ? AND alignment = ? AND training = ? AND faction = ? AND description = ?`, [
    req.body.user.id,
    req.body.charName,
    req.body.race,
    req.body.alignment,
    req.body.training,
    req.body.faction,
    req.body.charDesc
  ], function (err, results, fields) {
    if (err) throw err;
    console.log("SELECT RESULTS:")
    console.log(results[0])
    res.status(200).json(results)
  })
});

app.post("/saveCharacter/updateWeapon", (req, res, next) => {
  console.log("REQUEST BODY:")
  console.log(req.body);
  connectionString.query(`INSERT INTO saved_weapons (char_id, name, prefix, lvl, damage, rng, firerate, reload, magazine, other, area_of_effect, capacitor, critical, knockback, melee, resist, stealth, velocity, consumption, projectiles, manufacturer, type) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`, [
    req.body.character.id,
    req.body.weapon.name,
    req.body.weapon.accessory,
    req.body.weapon.lvl,
    req.body.weapon.damage,
    req.body.weapon.range,
    req.body.weapon.firerate,
    req.body.weapon.reload,
    req.body.weapon.magazine,
    req.body.weapon.other,
    req.body.weapon.area_of_effect,
    req.body.weapon.capacitor,
    req.body.weapon.critical,
    req.body.weapon.knockback,
    req.body.weapon.melee,
    req.body.weapon.resist,
    req.body.weapon.stealth,
    req.body.weapon.velocity,
    req.body.weapon.consumption,
    req.body.weapon.projectiles,
    req.body.weapon.prefix,
    req.body.weapon.type
  ],function (err, results, fields) {
    if (err) throw err;
  })
  connectionString.query(`SELECT * FROM saved_weapons WHERE char_id = ? AND name = ? AND lvl = ? AND damage = ? AND rng = ? AND firerate = ? AND reload = ? AND magazine = ? AND manufacturer = ? AND type = ?`, [
    req.body.character.id,
    req.body.weapon.name,
    req.body.weapon.lvl,
    req.body.weapon.damage,
    req.body.weapon.range,
    req.body.weapon.firerate,
    req.body.weapon.reload,
    req.body.weapon.magazine,
    req.body.weapon.prefix,
    req.body.weapon.type
  ], function (err, results, fields) {
    if (err) throw err;
    console.log("SELECT RESULTS:")
    console.log(results[0])
    res.status(200).json(results)
  })
});

app.get("/getCharacter", (req, res, next) => {
  console.log("REQUEST QUERY:")
  console.log(req.query.id)
  connectionString.query(`SELECT * FROM saved_chars sc JOIN saved_weapons sw ON sc.id = sw.char_id WHERE sc.userid = ? LIMIT 1`, [req.query.id], function (err, results, fields) {
    if (err) throw err;
    console.log("SELECT RESULTS:")
    console.log(results[0])
    res.status(200).json(results)
  })
})

// -- unsure about this
app.get("*", (req, res, next) => {
  res.sendFile(path.join(__dirname, "./public/index.html"));
});

app.listen(port, () => {
  console.log(`It's Over ${port}!`);
});
