import mongoose, { Document, Schema } from "mongoose";

export enum BookingStatus {
    PENDING = "PENDING",
    CONFIRMED = "CONFIRMED",
    CANCELLED = "CANCELLED",
    COMPLETED = "COMPLETED"
}

// TypeScript structure
export interface IBooking extends Document {
    eventId: mongoose.Types.ObjectId
    vendorId: mongoose.Types.ObjectId
    userId: mongoose.Types.ObjectId
    status : BookingStatus
    bookedAt: Date
    notes?: string
}