import jwt from 'jsonwebtoken'
import { userDto } from '../Dto/userDTO'

const JWT_SECRET = process.env.SECRET || 'messi'

export const tokenizar = (user:userDto):string =>{

    return jwt.sign({id:user.id,name:user.name,email:user.email,rol:user.rol},JWT_SECRET,{expiresIn:'1h'})
}