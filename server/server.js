const express = require("express");
const session = require("express-session");
const { json } = require("body-parser");
const cors = require("cors");
const massive = require("massive");
const passport = require("passport");
const Auth0Strategy = require("passport-auth0");

const config = require("./config.js");
const { secret, dbUser, database, domain, clientID, clientSecret } = config;

const port = 4200;

const app = express();

const connectionString = `postgres://${dbUser}@localhost/${database}`;

app.use(cors());
app.use(json());

app.use(
  session({
    secret,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 100000
    }
  })
);

app.use(passport.initialize());
app.use(passport.session());

passport.use(
  new Auth0Strategy(
    {
      domain,
      clientID,
      clientSecret,
      callbackURL: "/auth",
      scope: "openid profile"
    },
    (accessToken, refreshToken, extraParams, profile, done) => {
      console.log(profile);
      const db = app.get("db");
      db.getUserByAuthId([profile.id]).then((user, err) => {
        console.log(`INITIAL: ${user}`);
        if (!user[0]) {
          console.log(`CREATING USER`);
          db
            .createUserByAuth([profile.id, profile.displayName])
            .then((user, err) => {
              console.log(`USER CREATED: ${JSON.stringify(user[0])}`);
              return done(err, user[0]);
            });
        } else {
          console.log(`FOUND USER: ${user[0]}`);
          return done(err, user[0]);
        }
      });
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
    res.redirect(`http://localhost:3000/#/user/${req.user.name}`);
  }
);

app.get("/auth/me", (req, res) => {
  if (!req.user) return res.status(401).json({ err: "User Not Authenticated" });
  res.status(200).json(req.user);
});

app.get("/auth/logout", (req, res) => {
  req.logout();
  req.redirect("/");
});

app.listen(port, () => {
  console.log(`It's Over ${port}!`);
});
