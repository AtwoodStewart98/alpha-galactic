const express = require("express");
const session = require("express-session");
const { json } = require("body-parser");
const cors = require("cors");
const massive = require("massive");
const passport = require("passport");
const Auth0Strategy = require("passport-auth0");
const path = require("path");
const dotenv = require("dotenv").config();

//const config = require("./config.js");
//const { secret, dbUser, database, domain, clientID, clientSecret } = config;

// PRODUCTION
// const connectionString = `postgres://${process.env.dbUser}@localhost/${
//   process.env.database
// }`;

//localhost
const connectionString = `postgres://${process.env.DB_USER}@localhost/${
  process.env.DATABASE
}`;

massive(connectionString)
  .then(db => {
    app.set("db", db);
  })
  .catch(console.log());

const port = process.env.PORT || 4200;

// ^^^ PORT 3000 LOCAL ^^^ PORT 4200 LIVE ^^^ //

const app = express();

app.use(express.static(`${__dirname}/../build`));

app.use(cors());
app.use(json());

app.use(
  session({
    secret: process.env.SECRET,
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
      const db = app.get("db");
      db.getUserByAuthId([profile.id])
        .then((user, err) => {
          console.log(`INITIAL: ${user}`);
          if (!user[0]) {
            console.log(`CREATING USER`);
            db.createUserByAuth([profile.id, profile.displayName]).then(
              (user, err) => {
                console.log(`USER CREATED: ${JSON.stringify(user[0])}`);
                return done(err, user[0]);
              }
            );
          } else {
            console.log(`FOUND USER: ${user[0]}`);
            return done(err, user[0]);
          }
        })
        .catch(err => `CREATE ERROR: ${err}`);
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
  console.log(req.body);
  const db = app.get("db");
  db.saveCharacter([
    req.body.user.id,
    req.body.charName,
    req.body.race,
    req.body.alignment,
    req.body.training,
    req.body.faction,
    req.body.charDesc
  ])
    .then(response => {
      console.log(response);
      res.status(200).json(response);
    })
    .catch(error => console.log(`Post Error: ${error}`));
});

app.post("/saveCharacter/updateWeapon", (req, res, next) => {
  console.log(req.body);
  const db = app.get("db");
  db.updateWeaponToChar([
    req.body.character.id,
    req.body.weapon.prefix,
    req.body.weapon.name,
    req.body.weapon.lvl,
    req.body.weapon.damage,
    req.body.weapon.range,
    req.body.weapon.firerate,
    req.body.weapon.reload,
    req.body.weapon.magazine,
    req.body.weapon.other,
    req.body.weapon.AoE,
    req.body.weapon.capacitor,
    req.body.weapon.critical,
    req.body.weapon.kB,
    req.body.weapon.melee,
    req.body.weapon.resist,
    req.body.weapon.stealth,
    req.body.weapon.velocity,
    req.body.weapon.consumption,
    req.body.weapon.projectiles,
    req.body.weapon.manufacturer,
    req.body.weapon.type
  ])
    .then(response => {
      console.log(response);
      res.status(200).json(response);
    })
    .catch(error => console.log(`Weapon Error: ${error}`));
});

//unsure about this
app.get("*", (req, res, next) => {
  res.sendFile(path.join(__dirname, "./public/index.html"));
});

app.listen(port, () => {
  console.log(`It's Over ${port}!`);
});
