import mongoose from "mongoose";
import express from "express";

const artistSchema = new mongoose.Schema({
  Fullname: { type: String, required: true },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  Password: {
    type: String,
    required: true,
  },
  confirmPassword: {
    type: String,
    required: true,
  }
});
const Artist = mongoose.model("Artist", artistSchema);
export default Artist;