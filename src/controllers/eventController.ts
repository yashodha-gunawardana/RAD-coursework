import { Request, Response } from "express";
import Event, { IEvent, Status } from "../model/eventModel";


export const createEvent = async (req: Request, res: Response) => {
    try {
        const { userId, title, type, date, time, location, description, image } = req.body

        const newEvent = new Event({
            userId,
            title,
            type,
            date,
            time,
            location,
            description,
            image,
            status: Status.PLANNING,
        })

       
    } catch (err) {

    }
}