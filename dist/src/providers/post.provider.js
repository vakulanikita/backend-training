"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postProvider = void 0;
const post_entity_1 = require("../entity/post.entity");
exports.postProvider = [
    {
        provide: 'POSTS_REPOSITORY',
        useFactory: (connection) => connection.getRepository(post_entity_1.Post),
        inject: ['DATABASE_CONNECTION'],
    },
];
//# sourceMappingURL=post.provider.js.map