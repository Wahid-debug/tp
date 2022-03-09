const Jwt = require("jsonwebtoken");

const auth = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
     return res.status(400).json({code:400, data:null, message: "Unauthorized" });
    }
    const token = authHeader.replace("Bearer ", "");
    if(!token){
      res.status(400).json({code:400, data:null, message: "Unauthorized" });
    }
    const user = await Jwt.verify(token, "secrettkeyjwt");
    if (!user) {
      res.status(400).json({code:400, data:null, message: "Unauthorized" });
    }
    next();
  } catch (error) {
    res.status(500).json({code:500, data:null, message: "Unauthorized" });
  }
};

module.exports = auth;
