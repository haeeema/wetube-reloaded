import express from "express";

import { getEdit, postEdit, logout, see, startGithubLogin, finishGithubLogin, getChagePassword, postChagePassword } from "../controllers/userController"
import { avatarUpload, protectorMiddleware, publicOnlyMiddleware } from "../middlewares";

const userRouter = express.Router();

userRouter.get("/logout", protectorMiddleware,logout); 
userRouter
    .route("/edit")
    .all(protectorMiddleware)
    .get(getEdit)
    .post(avatarUpload.single("avatar"), postEdit);

userRouter
    .route("/change-password")
    .all(protectorMiddleware)
    .get(getChagePassword)
    .post(postChagePassword);

userRouter.get("/github/start", publicOnlyMiddleware, startGithubLogin);
userRouter.get("/github/finish", publicOnlyMiddleware, finishGithubLogin);

userRouter.get("/:id", see)

export default userRouter;