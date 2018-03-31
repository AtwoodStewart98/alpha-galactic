const express = require("express");
const session = require("express-session");
const { json } = require("body-parser");
const cors = require("cors");
const massive = require("massive");
const passport = require("passport");
const Auth0Strategy = require("passport-auth0");
const path = require("path");

const config = require("./config.js");
const { secret, dbUser, database, domain, clientID, clientSecret } = config;

const connectionString = `postgres://${dbUser}@localhost/${database}`;

massive(connectionString)
  .then(db => {
    app.set("db", db);
  })
  .catch(console.log());

const port = process.env.PORT || 4200;

const app = express();

app.use(express.static(path.join(__dirname, "/react-app/public")));

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
      db
        .getUserByAuthId([profile.id])
        .then((user, err) => {
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

app.get("*", (req, res, next) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(port, () => {
  console.log(`It's Over ${port}!`);
});
