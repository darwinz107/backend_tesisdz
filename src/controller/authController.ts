import { NextFunction, Request, Response } from "express";
import { hashedPassword } from "../services/password.services";
import { Usuario } from "../entities/user.entity";
import { AppDataSource } from "../connection/data-source";
import { tokenizar } from "../services/auth.token.services";

const userRepository = AppDataSource.getRepository(Usuario)

export const register = async(req:Request,res:Response):Promise<void> =>{
    
    
    const {name,cellphone,email,password} = req.body

    try {

        const passwordHashed = await hashedPassword(password);
        console.log(passwordHashed)
        const user = userRepository.create(
            {
                name,
                cellphone,
                email,
                password: passwordHashed
            }
        );
       
        await userRepository.save(user)
        res.send(`Register succesful for ${name}`)
        
    } catch (error) {
        console.log(`Error : ${error}`)
    }
}

export const obtenerUser = async(req:Request,res:Response):Promise<void> =>{

 const users = await userRepository.find()

 res.send(users)
}
