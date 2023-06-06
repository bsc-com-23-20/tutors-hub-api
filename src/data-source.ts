import "reflect-metadata"
import { Tutor } from "./entity/Tutor"
import { Reviews } from "./entity/Reviews"
import  {TypeOrmModuleOptions} from '@nestjs/typeorm'

export const tutorshubDataSource: TypeOrmModuleOptions = {
    type: "mysql",
    host: "sql9.freemysqlhosting.net",
    port: 3306,
    username: "sql9624658",
    password: "8sbi4V5q33",
    database: "sql9624658",
    synchronize: true,
    // logging: false,
    entities: [Tutor, Reviews],
    migrations: [],
    subscribers: [], 
    autoLoadEntities: true
}
