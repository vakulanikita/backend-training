"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseProvider = void 0;
const typeorm_1 = require("typeorm");
exports.databaseProvider = [
    {
        provide: 'DATABASE_CONNECTION',
        useFactory: async () => await (0, typeorm_1.createConnection)(),
    },
];
//# sourceMappingURL=database.provider.js.map