import { NextFunction, Request, Response } from "express";
import { hashedPassword } from "../services/password.services";
import { Usuario } from "../entities/user.entity";
import { AppDataSource } from "../connection/data-source";
import { tokenizar } from "../services/auth.token.services";
import { Rol } from "../enums/roles";
import { GoogleGenAI, Modality } from "@google/genai";
import * as fs from "node:fs";
import { text } from "node:stream/consumers";

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
                password: passwordHashed,
                rol:Rol.USER
                
            }
        );
       
        await userRepository.save(user)
        res.send(`Register succesful for ${name}`)
        
    } catch (error) {
        console.log(`Error : ${error}`)
    }
}

export const tokenHuggin = (req:Request,res:Response) =>{

    const tokenH = process.env.HF_TOKEN;
   res.json({
    
    tokenH:tokenH,
    tokenG: process.env.GEMINI_API_KEY
})
     
}

export const obtenerUser = async(req:Request,res:Response):Promise<void> =>{

 const users = await userRepository.find()

 res.send(users)
}

export const main =async(req:Request,res:Response) => {

  const ai = new GoogleGenAI({apiKey:process.env.GEMINI_API_KEY});
  const {prompt} = req.body
  
  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash-preview-image-generation",
    contents: prompt,
    config: {
      responseModalities: [Modality.TEXT, Modality.IMAGE],
    },
  });
 
  if(response?.candidates
   && response.candidates[0]?.content?.parts 
  ){
   for (const part of response.candidates[0].content.parts) {
    // Based on the part type, either show the text or save the image
    let generateJson = {text:'',
        binary:''}
     if(part.text){
        console.log(part.text)
      generateJson.text = part.text;
       
      
     }

     if ( part.inlineData) {
      const imageData = part.inlineData?.data;
      if(imageData){
      /*const buffer = Buffer.from(imageData, "base64");
      fs.writeFileSync("gemini-native-image.png", buffer);
       */
      generateJson.binary = imageData;
      
       
       res.status(200).json(generateJson)
       
      }else{
       console.log("Error at generate image")
      }
    }
  }
}else{
console.log("Error: Response empty")
}

}
