"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tutorshubDataSource = void 0;
require("reflect-metadata");
const Tutor_1 = require("./entity/Tutor");
const Reviews_1 = require("./entity/Reviews");
exports.tutorshubDataSource = {
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "mernana@03",
    database: "tutorshub",
    synchronize: true,
    logging: false,
    entities: [Tutor_1.Tutor, Reviews_1.Reviews],
    migrations: [],
    subscribers: [],
    autoLoadEntities: true
};
//# sourceMappingURL=data-source.js.map