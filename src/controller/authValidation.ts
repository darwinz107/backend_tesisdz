import { Request, Response } from "express";
import { AppDataSource } from "../connection/data-source";
import { Usuario } from "../entities/user.entity";
import { hashedPassword, validatePassword } from "../services/password.services";
import { tokenizar } from "../services/auth.token.services";

const userRepository = AppDataSource.getRepository(Usuario)
export const validarFunction = async (req:Request,res:Response):Promise<void> =>{

const {email,password} = req.body

 
try {
    
  const pass = await userRepository.createQueryBuilder("user")
                             // .select(["user.password","user.name","user.email"])
                              .where("user.email = :email",{email})
                              .getOne();

   if (!pass){
    res.status(404).json({message:"Account don't created!"});
    console.log("Account don't created!")
    return 
   }                           
   
   const validatePass = await validatePassword(password,pass.password);                          
  
  if (validatePass){

    const info = {
        id:pass.id,
        name:pass.name,
        email:pass.email,
        rol:pass.rol
    }
    console.log(info)
    const token = tokenizar(info);

    console.log(token)
    res.status(200).json({token, user:info})
    return 
  }
  else{
    res.status(401).json({message:"Password invalid!"})
  } 
    
} catch (error) {
    res.status(500).json({error})
    return 
}

}