import mongoose from "mongoose";
import express from "express";


const Todo_listSchema = new mongoose.Schema({
    Task_Title:{type: String, required:true},
    Description:{type:String},
    Label:{type:String},
    Deadline:{type:Date},
   Priority:{type:String, required:true},
   Done:{type:Boolean},

});
const Todo = mongoose.model("Todo",Todo_listSchema);
export default Todo;