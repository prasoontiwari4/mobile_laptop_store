import mongoose from 'mongoose';

const url = "mongodb://localhost:27017/mobile_laptopStore";
mongoose.connect(url);
console.log("Successfully connected to MongoDB database...");
