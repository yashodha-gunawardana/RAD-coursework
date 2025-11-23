import { Request, Response } from "express";
import { User } from "../model/userModel";


export const registerUser = async (req: Request, res: Response) => {
    try {
        const { fullname, email, password, address, phone } = req.body;
    } catch (err) {

    }
}