import express from 'express';
const router = express.Router()
import{signup} from "../controller/artist.controller.js"
import{login} from "../controller/artist.controller.js"

router.post("/signup",signup);//signup is our function defined in controller.
router.post("/login",login);


export default router;