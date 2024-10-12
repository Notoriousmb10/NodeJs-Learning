const { User } = require("../Model/schema");
const bcrypt = require("bcrypt");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

passport.use(
  new LocalStrategy(async (Username, Password, Done) => {
    try {
      const user = await User.findOne({ username: Username });
      if (!Username) {
        return Done(null, false, { message: "User not found" });
      }
      // const isPasswordMatched = user.password === Password;
      const isPasswordMatched = await bcrypt.compare(Password, user.password);
      if (isPasswordMatched) {
        return Done(null, user);
      } else {
        return Done(null, false, { message: "Password not matched" });
      }
    } catch (err) {
      return Done(err);
    }
  })
);

module.exports = passport;