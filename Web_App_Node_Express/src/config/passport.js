const passport = require('passport');
require('./strategies/local.strategy')();

// this is an alternative to creating a function and then
// having the export at the end
module.exports = function passportConfig(app) {
  app.use(passport.initialize());
  app.use(passport.session());

  passport.serializeUser((user, done) => {
    done(null, user);
  });

  passport.deserializeUser((user, done) => {
    done(null, user);
  });
};
