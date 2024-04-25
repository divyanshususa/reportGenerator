import { Router } from "express";
import { denyAcsess, getALLReports, getAUser, getAllUsers, grantAcsess, login, register, resetPassword, setPasswordAndLevel } from "../controllers/user.controller.js";
import { authorizedAdmin, isAuthenticated } from "../middlewares/auth.middleware.js";

const router = Router()

router.route("/register").post(register)

router.route("/login").post(login)


router.route("/set-password-level").post(isAuthenticated, authorizedAdmin, setPasswordAndLevel)

router.route("/get-a-user/:id").get(isAuthenticated, authorizedAdmin, getAUser)

router.route("/get-users").get(isAuthenticated, authorizedAdmin, getAllUsers)



router.route("/get-reports/:id").get(isAuthenticated, getALLReports)

router.route("/get-admin-reports/:id").get(isAuthenticated, authorizedAdmin, getALLReports)

router.route("/deny-access").post(isAuthenticated, authorizedAdmin, denyAcsess)

router.route("/grant-access").post(isAuthenticated, authorizedAdmin, grantAcsess)

router.route("/reset-password").post(isAuthenticated, authorizedAdmin, resetPassword)

export default router