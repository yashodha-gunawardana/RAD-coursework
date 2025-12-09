import { Router } from "express";
import { createOrUpdateBudget } from "../controllers/budgetController";
import { authenticate } from "../middleware/authMiddleware";


const router = Router();

router.post("/", authenticate, createOrUpdateBudget)


export default router