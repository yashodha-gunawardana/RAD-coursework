import { Router } from "express";
import { register } from "../controllers/authController";
import { authenticate } from "../middleware/authMiddleware";
import { requiredRole } from "../middleware/roleMiddleware";
import { Role } from "../model/userModel";

// create a new Express Router object
const router = Router();