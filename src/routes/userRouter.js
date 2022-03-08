const express = require("express");
const userRouter = express.Router();
const {signUp, login} = require("../controllers/userController")
const auth = require("../middleware/auth")
const {customMiddlewareAuthKey, customMiddlewareClineService} = require("../middleware/customAuth");

userRouter.get("/users", customMiddlewareAuthKey,customMiddlewareClineService, signUp);
userRouter.post("/users", auth,customMiddlewareAuthKey,customMiddlewareClineService, login);

module.exports = userRouter;