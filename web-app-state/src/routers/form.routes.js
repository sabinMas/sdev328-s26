import express from "express";
import { getStep1, postStep1, getStep2, postStep2, getStep3, postStep3, getDone } from "../controllers/form.controller.js";

const router = express.Router();

router.get("/signup/step/1", getStep1);
router.post("/signup/step/1", postStep1);

router.get("/signup/step/2", getStep2);
router.post("/signup/step/2", postStep2);

router.get("/signup/step/3", getStep3);
router.post("/signup/step/3", postStep3);

router.get("/signup/done", getDone);

export default router;
