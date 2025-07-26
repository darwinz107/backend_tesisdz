import express, { NextFunction, Request, Response } from 'express'
import  jwt from 'jsonwebtoken'
import { getUserById, obtenerUser, updateUser } from '../controller/authController'


const router = express.Router()
const JWT_SECRET = process.env.SECRET || "messi"

const validarToken = (req:Request,res:Response,next:NextFunction) => {

const header = req.headers['authorization']
const token = header && header.split(' ')[1]

if(!token){
  res.status(401).json("No autorizado");
  return;
}

jwt.verify(token,JWT_SECRET,(err,decode)=>{

    if(err){
        console.error(err)
         res.status(403).json("No tienes acceso");
         return;
    }
    next();
})

}


router.get('/user',validarToken,obtenerUser)
router.get('/user/:id',getUserById)
router.put('/update/:id',updateUser)
export default router;