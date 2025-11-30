import { Router } from "express";
import { createEvent, getMyEvents, getEventById, updateEvent, deleteEvent } from "../controllers/eventController";
import { authenticate } from "../middleware/authMiddleware";
import { requiredRole } from "../middleware/roleMiddleware";
import { Role } from "../model/userModel";

const router = Router();

router
    .route("/")
    .post(authenticate, createEvent)
    .get(authenticate, getMyEvents)

router
    .route("/:id")
    .get(authenticate, getEventById)
    .put(authenticate, updateEvent)
    .delete(authenticate, deleteEvent)

export default router