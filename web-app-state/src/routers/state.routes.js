import express from "express";
import { getCookies, postCookies, getProfile, postProfile } from "../controllers/state.controller.js";

const router = express.Router();

router.get("/cookies", getCookies);
router.post("/state/cookies", postCookies);

router.get("/profile", getProfile);
router.post("/state/profile", postProfile);

export default router;
