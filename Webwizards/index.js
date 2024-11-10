import express from "express"; //express js
import mongoose from "mongoose"; //database
import dotenv from "dotenv";
import path from "path";
import cors from "cors";

//server info
let server = express();
const PORT = 3000;
//database 
const URI = ("mongodb://localhost:27017/")

//enabling CORS :
server.use(cors());



//importing files
import Artist_route from "./route/Artist.route.js";
import Todo_route from "./route/Todo.route.js";
import Todo from "./model/Todo.js";
import { To_do } from "./controller/Todo.controller.js";
import bodyParser from "body-parser";

//json for server
server.use(express.json());
dotenv.config();

//connecting to database:
try {
  mongoose.connect(URI    
    // ,{ useNewUrlParser: true,
    // useUnifiedTopology: true,
    // useCreateIndex:true}
  )
  console.log("connnected to MongoDb"); //successfully connected
} catch (error) {
  console.log("Error:", error); // error  in connecting
}

server.use(express.static('public'))

// get and post requests:
server.get("/todos",(req,res)=>{
  res.json(todos); 
})
server.get('/about', (req, res) => {
  const htmlFilePath = path.join(process.cwd(),'public','about.html');  // Get absolute path
  res.sendFile(htmlFilePath, (err) => {
    if (err) {
      res.status(500).send('Error in sending the HTML file');
    }
  });
});




//Routers:
server.use("/user",Artist_route);
server.use("/todo", Todo_route);


server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})
