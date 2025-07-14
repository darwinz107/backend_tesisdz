import bcrypt from 'bcrypt'

const SALT_ROUNDS = 10;

export const hashedPassword = async(password:string):Promise<string> =>{

    return bcrypt.hash(password,SALT_ROUNDS)

}

export const validatePassword = async(password:string,pass:string):Promise<boolean> =>{

    return bcrypt.compare(password,pass);
}

