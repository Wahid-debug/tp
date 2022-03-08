const Jwt = require("jsonwebtoken");

const auth = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      throw new Error("No authorization header");
    }
    const token = authHeader.replace("Bearer ", "");
     const user = await Jwt.verify(token, "secrettkeyjwt");
    if (!user) {
      throw new error("Not Authorized this user");
    }
    req.user = user;
    next();
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: false, code:500, message: "Middleware token Expired" });
  }
};

module.exports = auth;
