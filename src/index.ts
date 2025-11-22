import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const SERVER_PORT = process.env.SERVER_PORT

const app = express();

// json data parse in incoming requests
app.use(express.json());

