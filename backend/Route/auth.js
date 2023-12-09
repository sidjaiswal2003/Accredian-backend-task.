import express  from "express";
import userLogin  from "../Controller/authentication.js";
import userSign  from "../Controller/auth2.js";
const router =express.Router()
router.post('/login',userLogin)
router.post('/signup',userSign)

export default router