import express from 'express';
import path from 'path';
const router = express.Router()
import { cwd } from 'process';
import { fileURLToPath } from "url";
import { dirname } from "path";
import{signup} from "../controller/artist.controller.js"
import{login} from "../controller/artist.controller.js"
router.get('/signup', (req, res) => {
    const htmlFilePath = path.join(process.cwd(),'public','register.html');  // Get absolute path
    res.sendFile(htmlFilePath, (err) => {
      if (err) {
        res.status(500).send('Error in sending the HTML file');
      }
    });
  });

router.get('/login', (req, res) => {
      const htmlFilePath = path.join(process.cwd(), 'public', 'login.html');  // Get absolute path
      res.sendFile(htmlFilePath, (err) => {
        if (err) {
           res.status(500).send('Error in sending the HTML file');
                    }
                                                                 });
                                                                      });
                                                                      router.post("/signup",signup);  //signup is our function defined in controller : user.controller.js
                                                                      router.post("/login",login);   //login function is defined in controller : user.controller.js
                                                                      export default router;
                                                                      