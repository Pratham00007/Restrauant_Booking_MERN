import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { dbConnection } from "./database/dbConnection.js";
import { errorMiddleware } from "./error/error.js";

const app=express();
dotenv.config({path : "./config/config.env"});

// app,use is used to -> use cors as mioddleware
app.use(cors({
    origin:[process.env.FRONTEND_URL], // fornnted ka path jisko backend se connect karna hai
    methods:["POST"],
    credentials:true
}));

// string conversion 
app.use(express.json());
// kis type ka data use karne wale 
app.use(express.urlencoded({extended:true}));

dbConnection();

app.use(errorMiddleware);
export default app;