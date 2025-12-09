import { Request, Response } from "express";
import Budget, { BudgetStatus } from "../model/budgetModel";
import Event from "../model/eventModel";
import { AuthRequest } from "../middleware/authMiddleware";


export const createOrUpdateBudget = async (req: AuthRequest, res: Response) => {
    try {

        const { eventId, selectedItems = [] } = req.body
        const userId = req.user._id

    } catch (err) {

    }
}
