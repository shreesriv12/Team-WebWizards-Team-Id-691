import mongoose from "mongoose";
import express from "express";


const Todo_listSchema = new mongoose.Schema({
    Task_Title:{type: String, required:true},
    Deadline:{type:Date},
    Description:{type:String},
    Genre:{type:String},
   Priority:{type:String, required:true},

});
const Todo = mongoose.model("Todo",Todo_listSchema);
export default Todo;
