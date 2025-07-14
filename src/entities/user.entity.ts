import { IsEmail, IsNumber, Length, Max, max } from "class-validator"
import {Column, Entity, PrimaryColumn, PrimaryGeneratedColumn} from "typeorm"

@Entity({name:"Users"})

export class Usuario{
    @PrimaryGeneratedColumn()
    id!:number

    @Column()
    name:string

    @Column()
    @IsNumber()

    cellphone:number

    @Column(
        
    )
    @IsEmail()
    email!:string
    @Column(
           
    )
    password!:string
}