import { IsEmail, IsEnum, IsNumber, IsString } from "class-validator";
import { Rol } from "../enums/roles";


export class userDto{
    @IsNumber()
    id:number

    @IsString()
    name:string

    @IsEmail()
    email:string

    @IsEnum(Rol)
    rol:Rol
}