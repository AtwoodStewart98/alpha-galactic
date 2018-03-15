const express = require("express");
const session = require("express-session");
const bodyParser = require("body-parser");
const cors = require("cors");
const massive = require("massive");
const passport = require("passport");
const Auth0Strategy = require("passport-auth0");

const config = require("./config.js");
const { secret, dbUser, database, domain, clientID, clientSecret } = config;

const port = 4200;

const connectionString = `postgres://${dbUser}@localhost/${database}`;

const app = express();

app.use("/", express.static(`${__dirname}/react-app/src`));

app.use(cors());
app.use(bodyParser.json());

app.use(
  session({
    secret,
    resave: false,
    saveUninitialized: false
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
      callbackURL: "/auth/callback"
    },
    (accessToken, refreshToken, extraParams, profile, done) => {
      const db = app.get("db");
      db.getUserByAuthId([profile._json.sub]).then((user, err) => {
        console.log(`INITIAL: ${user}`);
        if (!user[0]) {
          console.log(`CREATING USER`);
          db
            .createUserByAuth([profile.displayName, profile._json.sub])
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

app.get("/auth", passport.authenticate("Auth0"));

app.get(
  "/auth/callback",
  passport.authenticate("auth0", { successRedirect: "/" }),
  (req, res) => {
    res.status(200).json(req.user);
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
