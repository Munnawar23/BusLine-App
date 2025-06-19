import express from "express";
import { getBusDetails, searchBuses } from "../controllers/bus.js";

const router = express.Router()

router.post("/search", searchBuses);
router.get("/:busId", getBusDetails)

export default router