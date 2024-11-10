import express from 'express';
import path from 'path';
const router = express.Router()
import {To_do} from "../controller/Todo.controller.js";
import { cwd } from 'process';
import { fileURLToPath } from "url";
import { dirname } from "path";

router.get('/', (req, res) => {
    const htmlFilePath = path.join(process.cwd(), 'public', 'todolist.html');  // Get absolute path
    res.sendFile(htmlFilePath, (err) => {
      if (err) {
        res.status(500).send('Error in sending the HTML file');
      }
    });
  });


router.post("/",To_do);
export default router; 
