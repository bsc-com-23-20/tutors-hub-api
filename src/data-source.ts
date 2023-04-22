import "reflect-metadata"
import { DataSource } from "typeorm"
import { Tutor } from "./entity/Tutor"
import { Reviews } from "./entity/Reviews"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "mernana@03",
    database: "tutorshub",
    synchronize: true,
    logging: false,
    entities: [Tutor, Reviews],
    migrations: [],
    subscribers: [],
})
