import { IsEmail, IsNumber, IsString } from "class-validator";


export class userDto{
    @IsNumber()
    id:number

    @IsEmail()
    email:string

    
}