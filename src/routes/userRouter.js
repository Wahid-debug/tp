const express = require("express");
const userRouter = express.Router();
const {signUp, login} = require("../controllers/userController")
const auth = require("../middleware/auth")
const {customMiddleware} = require("../middleware/customAuth");

userRouter.get("/publicapi", customMiddleware, signUp);
userRouter.post("/privateapi", auth,customMiddleware, login);

module.exports = userRouter;