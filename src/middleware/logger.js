const logger = (req, res, next) => {
  const ahora = new Date().toString();
  const register = `${ahora}: ${req.method} ${req.url} from ${req.ip}`;
  console.log(register);
  next();
};

module.exports = logger;
