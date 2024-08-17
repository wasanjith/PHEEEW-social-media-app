import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    //member since august 2024
    username:{
        type:String,
        required:true,
        unique:true
    },
    fullName:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type: String,
        required:true,
        minLength: 6,
    },






},{timestamps:true});