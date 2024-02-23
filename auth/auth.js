const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

const mockAuth = require("./mock-auth");

function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect("/");
}

module.exports = function (app) {
  app.use(
    session({
      secret: "tu secreto",
      resave: false,
      saveUninitialized: false,
    })
  );

  app.use(passport.initialize());
  app.use(passport.session());

  passport.use(new LocalStrategy(mockAuth.authenticate));

  passport.serializeUser(function (user, done) {
    done(null, user.username);
  });

  passport.deserializeUser(function (username, done) {
    const user = users.find((u) => u.username === username);

    if (user) {
      done(null, user);
    } else {
      done(null, false);
    }
  });

  app.get("/succesful", ensureAuthenticated, function (req, res) {
    res.send("Welcome, " + req.user.username + "!");
  });

  app.get("/", function (req, res) {
    res.send("Welcome friends!");
  });

  app.post(
    "/login",
    passport.authenticate("local", { failureRedirect: "/?error=login" }),
    function (req, res, next) {
      if (req.authError) {
        res.render("login", { error: req.authError.message });
      } else {
        res.redirect("/succesful");
      }
    }
  );
};
