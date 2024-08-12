module.exports = {
    development: {
        client: "mysql2",
        connection: {
            host: "127.0.0.1",
            user: "root",
            password: "@Ghani123",
            database: "uptime_kuma",
        },
        migrations: {
            directory: "./db/knex_migrations",
        }
    },

    staging: {
        client: "mysql2",
        connection: {
            host: "127.0.0.1",
            user: "root",
            password: "@Ghani123",
            database: "uptime_kuma",
        },
        pool: {
            min: 2,
            max: 10,
        },
        migrations: {
            directory: "/db/knex_migrations",
            tableName: "knex_migrations"
        }
    },

    production: {
        client: "mysql2",
        connection: {
            host: "127.0.0.1",
            user: "root",
            password: "@Ghani123",
            database: "uptime_kuma",
        },
        pool: {
            min: 2,
            max: 10,
        },
        migrations: {
            directory: "/db/knex_migrations",
            tableName: "knex_migrations"
        }
    }
};
