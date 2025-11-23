import { IUser } from "../model/userModel";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

// load .env variables
dotenv.config()

const JWT_SECRET = process.env.JWT_SECRET as string

// generate a JSON web token for a given user
export const signAccessToken = (user: IUser): string => {
    return jwt.sign(
        
    )

}