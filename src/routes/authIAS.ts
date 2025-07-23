import express from 'express'
import { main } from '../controller/authController';


const router = express.Router();

router.post('/image',main)

export default router;