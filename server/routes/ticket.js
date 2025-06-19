import express from "express";
import { bookTicket, getUserTickets } from "../controllers/ticket.js";
import { verifyToken } from "../middleware/verify.js";

const router = express.Router()

router.post("/book", verifyToken, bookTicket)
router.get("/my-tickets", verifyToken, getUserTickets)

export default router
