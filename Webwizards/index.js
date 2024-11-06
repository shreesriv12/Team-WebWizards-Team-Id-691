import express from "express"; //express js
import mongoose from "mongoose"; //database
import dotenv from "dotenv";
import path from "path";
// import js from "./public/register.js"; 

//server info
let server = express();
const PORT = 3000;
//database 
const URI = "mongodb://localhost:27017/";

//importing files
import Artist_route from "./route/Artist.route.js";
import Todo_route from "./route/Todo.route.js";
import Todo from "./model/Todo.js";
import { To_do } from "./controller/Todo.controller.js";
import bodyParser from "body-parser";

//json for server
server.use(express.json());
dotenv.config();

server.use(express.static('public'))
server.use(bodyParser.json());

// get and post requests:
server.get("/todos",(req,res)=>{
  res.json(todos); 
})
server.get("/about", (req, res) => {
  res.sendFile("C:/Users/LENOVO/Desktop/DiddysParty/public/about.html");
});
server.get("/contact", (req, res) => {
  res.sendFile();
});
server.get("/user/signup", (req, res) => {
  res.sendFile("C:/Users/LENOVO/Desktop/DiddysParty/public/register.html")
});
server.get("/user/signup", (req, res) => {
  res.sendFile("C:/Users/LENOVO/Desktop/DiddysParty/public/register.js")
});

server.get("/user/login", (req, res) => {
  res.sendFile("C:/Users/LENOVO/Desktop/DiddysParty/public/login.html")
  // res.sendFile("C:/Users/LENOVO/Desktop/DiddysParty/public/login.css")
  // res.sendFile("C:/Users/LENOVO/Desktop/DiddysParty/public/login.js")
});

// save data to the database
server.post('/user/signup', (req, res) => {
  const userData = req.body;  // data from request-body 
  console.log('user data:', userData);
  res.send({ message: 'Data is successfully recieved!' });
});

//connecting to database:
try {
  mongoose.connect(URI);
  console.log("connnected to MongoDb"); //successfully connected
} catch (error) {
  console.log("Error:", error); // error  in connecting
}

//Routers:
server.use("/user",Artist_route);
server.use("/todo", Todo_route);

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})