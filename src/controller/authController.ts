import { Request, Response } from "express";
import { hashedPassword } from "../services/password.services";
import { Usuario } from "../entities/user.entity";
import { AppDataSource } from "../connection/data-source";
import { tokenizar } from "../services/auth.token.services";

export const register = async(req:Request,res:Response):Promise<void> =>{
    
    const userRepository = AppDataSource.getRepository(Usuario)
    const {email,password} = req.body

    try {

        const passwordHashed = await hashedPassword(password);
        console.log(passwordHashed)
        const user = await userRepository.create(
            {
                email,
                password: passwordHashed
            }
        );
       
        await userRepository.save(user)

        const token = tokenizar(user)

        res.status(201).json({token})
    } catch (error) {
        console.log(`Error : ${error}`)
    }
}