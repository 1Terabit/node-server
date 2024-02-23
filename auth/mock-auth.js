const users = [
  {
    username: "usuario",
    password: "contraseña",
  },
];

module.exports = {
  authenticate: (username, password, done) => {
    try {
      const user = users.find(
        (u) => u.username === username && u.password === password
      );

      if (user) {
        return done(null, user);
      } else {
        return done(null, false, { message: "Incorrect credentials" });
      }
    } catch (error) {
      console.error("Error authenticating:", error);
      return done(error);
    }
  },
};
