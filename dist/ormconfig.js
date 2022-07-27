module.exports = {
    "type": "postgres",
    "host": "abul.db.elephantsql.com",
    "port": 5432,
    "entities": ["src/entity/post.entity"],
    "username": "rtyooyqx",
    "password": "mwxdurMGLqXVeYHJpum1OO5ALHb5PZ1H",
    "database": "rtyooyqx",
    "synchronize": false,
    "url": process.env.DATABASE_URL,
    "ssl": { rejectUnauthorized: false }
};
//# sourceMappingURL=ormconfig.js.map