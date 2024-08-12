exports.up = async function (knex) {
    await knex.schema.table("monitor", function (table) {
        table.integer("mikrotik_id").unsigned().references("id").inTable("mikrotik").onDelete("CASCADE");
    });
};

exports.down = async function (knex) {
    await knex.schema.table("monitor", function (table) {
        table.dropColumn("mikrotik_id");
    });
};
