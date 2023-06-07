import "reflect-metadata"
import { Tutor } from "./entity/Tutor"
import { Reviews } from "./entity/Reviews"
import  {TypeOrmModuleOptions} from '@nestjs/typeorm'

export const tutorshubDataSource: TypeOrmModuleOptions = {
    type: "mysql",
    host: "sql7.freesqldatabase.com",
    port: 3306,
    username: "sql7624240",
    password: "nyNhEQhy8U",
    database: "sql7624240",
    synchronize: true,
    logging: false,
    entities: [Tutor, Reviews],
    migrations: [],
    subscribers: [], 
    autoLoadEntities: true
}
