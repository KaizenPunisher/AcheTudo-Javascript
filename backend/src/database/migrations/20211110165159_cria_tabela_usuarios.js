exports.up = function(knex) {
    return knex.schema.createTable('usuarios', function(table){
        
        table.string('id').primary();
        table.string('nome').notNullable();
        table.string('email').notNullable().unique();
        table.boolean('email_verificado').notNullable();
        table.string('email_token').notNullable();
        table.string('password_hash').notNullable();
        table.string('senha_reset_token');
        table.string('senha_reset_expiracao');
        table.string('now');
        table.timestamp('created_at').defaultTo(knex.fn.now());

    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('usuarios');
};