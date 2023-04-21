import "reflect-metadata"
import { DataSource } from "typeorm"
import { Tutor } from "./entity/Tutor"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "mernana@03",
    database: "tutorshub",
    synchronize: true,
    logging: false,
    entities: [Tutor],
    migrations: [],
    subscribers: [],
})
