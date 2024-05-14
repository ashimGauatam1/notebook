const jwt = require("jsonwebtoken");

const JWT_SCRT = "ashim$gautam";

const fetchuser = (req, res, next) => {        // middleware
  const token = req.header('auth-token');
  if (!token) {
    return res.status(401).json({ error: "invalid token" });
  }
  try {
    const data = jwt.verify(token, JWT_SCRT);
    console.log(data);
    req.notes = data.notes;        // yo note vaneko hamle token ma jun object k id banayem tei hunxa

    next(); // Call next route in the given i call (req,res)
  } catch (error) {
    return res.status(401).json({ error: "invalid token" });
  }
};


module.exports = fetchuser;
