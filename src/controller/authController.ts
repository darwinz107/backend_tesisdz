import { Request, Response } from "express";
import { hashedPassword } from "../services/password.services";
import { Usuario } from "../entities/user.entity";

export const register = async(req:Request,res:Response):Promise<void> =>{
    
    const userRepository = dataSource.getRepository(Usuario)
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

        res.status(201).json({message:"Usuario fallo al crear",user})
    } catch (error) {
        console.log(`Error : ${error}`)
    }
}