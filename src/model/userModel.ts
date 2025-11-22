import mongoose, { Document, Schema } from "mongoose";

export enum Role {
    ADMIN = "ADMIN",
    VENDOR = "VENDOR",
    USER = "USER"
}

export enum Status {
    PENDING = "PENDING",
    APPROVED = "APPROVED",
    REJECTED = "REJECTED"
}

export interface IUser extends Document {
    _id: mongoose.Types.ObjectId
    fullname: string
    email: string
    password: string
    address?: string
    phone?: string
    roles: Role[]  // array of roles assigned to user
    approved: Status
}