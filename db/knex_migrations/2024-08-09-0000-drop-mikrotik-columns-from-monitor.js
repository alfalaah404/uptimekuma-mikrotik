exports.up = function (knex) {
    return knex.schema.alterTable("monitor", function (table) {
        table.dropColumn("mikrotik_ip");
        table.dropColumn("mikrotik_username");
        table.dropColumn("mikrotik_password");
    });
};

exports.down = function (knex) {
    return knex.schema.alterTable("monitor", function (table) {
        table.string("mikrotik_ip").notNullable();
        table.string("mikrotik_username").notNullable();
        table.string("mikrotik_password").notNullable();
    });
};
