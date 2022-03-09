const Jwt = require("jsonwebtoken");
const {jwt_secret} = require("../../config/config");
const auth = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
     return res.status(401).json({ data:null, message: "Unauthorized", code:401, });
    }
    const token = authHeader.replace("Bearer ", "");
    if(!token){
      res.status(401).json({ data:null, message: "Unauthorized", code:401, });
    }
    const user = await Jwt.verify(token, jwt_secret);
    if (!user) {
      res.status(401).json({ data:null, message: "Invalid token", code:401, });
    }
    next();
  } catch (error) {
    res.status(500).json({ data:null, message: "Unauthorized", code:500, });
  }
};

module.exports = auth;
