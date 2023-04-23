import "reflect-metadata"
import { Tutor } from "./entity/Tutor"
import { Reviews } from "./entity/Reviews"
import  {TypeOrmModuleOptions} from '@nestjs/typeorm'

export const tutorshubDataSource: TypeOrmModuleOptions = {
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
}
