import express from "express";
import { getStatus, getStatusJson } from "../controllers/status.controller.js";

const router = express.Router();

router.get("/status", getStatus);
router.get("/api/status.json", getStatusJson);

export default router;
