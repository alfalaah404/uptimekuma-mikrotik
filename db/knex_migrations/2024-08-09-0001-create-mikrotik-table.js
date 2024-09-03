exports.up = function (knex) {
    return knex.schema.createTable("mikrotik", function (table) {
        table.increments("id").primary();
        table.string("ip").notNullable();
        table.string("username").notNullable();
        table.string("password").notNullable();
        table.timestamps(true, true);
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable("mikrotik");
};
