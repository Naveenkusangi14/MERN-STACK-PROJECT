import { Router } from "express";
import {
  loginUser,
  logoutUser,
  registerUser,
  refreshAccessToken,
  getCurrentUser,
  updateAccountDetails,
  changeCurrentPassword,
} from "../controller/auth.controller.js";

import { verifyJWT } from "../middlewares/auth.middleware.js";
import validate from "../middlewares/validate.middleware.js";
import {signupSchema , loginSchema} from "../validator/auth-validator.js";

const router = Router();

router.post("/register", validate(signupSchema), registerUser);
router.post("/login",validate(loginSchema), loginUser);
router.post("/logout", verifyJWT, logoutUser);
router.post("/refresh-token", refreshAccessToken);
router.post("/change-password", verifyJWT, changeCurrentPassword);
router.get("/current-user", verifyJWT, getCurrentUser);
router.patch("/update-account", verifyJWT, updateAccountDetails);

export default router;
