import { IsEmail, IsNumber, IsString } from "class-validator";


export class userDto{
    @IsNumber()
    id:number

    @IsString()
    name:string

    @IsEmail()
    email:string

    
}