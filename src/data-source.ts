import "reflect-metadata"
import { Tutor } from "./entity/Tutor"
import { Reviews } from "./entity/Reviews"
import  {TypeOrmModuleOptions} from '@nestjs/typeorm'

export const tutorshubDataSource: TypeOrmModuleOptions = {
    type: "mysql",
    host: "sql9.freesqldatabase.com",
    port: 3306,
    username: "sql9624472",
    password: "CfFybyDKPy",
    database: "sql9624472",
    synchronize: true,
    logging: false,
    entities: [Tutor, Reviews],
    migrations: [],
    subscribers: [], 
    autoLoadEntities: true
}
