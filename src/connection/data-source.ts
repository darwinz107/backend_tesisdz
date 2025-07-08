import { Usuario } from "../entities/user.entity";
import {DataSource} from 'typeorm'

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "root",
    database: "databasedz4",
    synchronize: true,
    logging: true,
    entities: [Usuario],
    subscribers: [],
    migrations: [],
})