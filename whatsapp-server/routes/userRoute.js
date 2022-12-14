import express from "express";
import * as userController from "../controllers/userController.js"
import {validate, validateLogin, validateSignUp} from "../middlewares/validator.js";
import {protect} from "../middlewares/userMiddleware.js";

const router = express.Router()

router.post('/signup', ...validateSignUp, validate, userController.signup)

router.post('/login', ...validateLogin, validate, userController.login)

router.post('/verify-email', userController.verifyEmail)

router.post('/forgot-password', userController.forgotPassword)

router.post('/verify-otp-reset-pass', userController.verifyOTPResetPass)

router.post('/reset-password', userController.resetPassword)

router.get('/', protect, userController.allUsers)

export default router;
