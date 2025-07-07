import {Column, Entity, PrimaryColumn} from "typeorm"

@Entity({name="Users"})

export class Usuario{
    @PrimaryColumn()
    id:number,
    @Column(
        
    )
    email:string,
    @Column(
       { length:10}      
    )
    password:string
}