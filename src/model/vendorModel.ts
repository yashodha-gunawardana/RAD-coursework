import mongoose, { Document, Schema } from "mongoose";

export enum VendorCategory {
    PHOTOGRAPY = "PHOTOGRAPY",
    CATERING = "CATERING",
    DECORATION = "DECORATION",
    DJ = "DJ",
    VENUE = "VENUE",
    MAKEUP = "MAKEUP",
    FLORIST = "FLORIST",
    OTHER = "OTHER"
}