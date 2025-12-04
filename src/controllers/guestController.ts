import { Request, Response } from "express";
import Guest from "../model/guestModel";
import Event from "../model/eventModel";


// add new guest function
export const addGuest = async (req: Request, res: Response) => {
    try {
        const { eventId, name, email, phone, plusOne, message } = req.body
        const userId = (req as any).user._id

        const event = await Event.findOne({ _id: eventId, userId })

        if (!event) {
            return res.status(404).json({
                message: "Event not found or you don't own it.."
            })
        }

        const newGuest = new Guest({
            eventId,
            name,
            email,
            phone,
            plusOne,
            message,
            rsvpStatus: "PENDING"
        })
        await newGuest.save()

        return res.status(201).json({
            message: "Guest added successfully..",
            data: newGuest
        })
        
    } catch (err) {

    }
}