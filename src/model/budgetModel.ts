import mongoose, { Document, Schema } from "mongoose";


export enum BudgetStatus {
    DRAFT = "DRAFT",
    CONFIRMED = "CONFIRMED",
    PAID = "PAID",
}


// interface for user-selected extra items
export interface IUserSelectedItems {
    itemId: mongoose.Types.ObjectId
    name: string
    unitPrice: number
    quantity: number
    total: number
}


// budget interface
export interface IBudget extends Document {
    eventId: mongoose.Types.ObjectId
    userId: mongoose.Types.ObjectId
    basePrice: number
    selectedItems: IUserSelectedItems[]
    extraTotal: number
    totalAmount: number
    status: BudgetStatus
    createdAt: Date
    updatedAt: Date
}