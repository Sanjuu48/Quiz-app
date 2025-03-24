import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';

dotenv.config(); 

const app=express();

app.get("/",(req,res)=>{
.console.log('Server is running on port 5000');
console.log('Environment:', process.env.NODE_ENV);
console.log('Database connection:', process.env.MONGO_URI);    
})

console.log(process.env.MONGO_URI);

app.listen(5000, ()=>{
    connectDB();   
    console.log("Server started at http://localhost:5000")
});

