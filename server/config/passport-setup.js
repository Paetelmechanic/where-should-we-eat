const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const keys = require('./keys');

passport.use(
  new GoogleStrategy({
    // options for google strategy
    // Rethink this callback URI to make with work with Single Page App
    clientID: keys.googleAuth.clientID,
    clientSecret: keys.googleAuth.clientSecret,
    callbackURL: '/api/redirect',
  }, (accessToken, refreshToken, profile, done) => {
    // passport callback function
    console.log(profile);
    // Using the profile, check to see if a user with that googleid
    // exists in our database or not. Lookup / Create user
  }),
);
