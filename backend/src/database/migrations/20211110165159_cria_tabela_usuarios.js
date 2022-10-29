exports.up = function(knex) {
    return knex.schema.createTable('usuarios', function(table){
        
        table.string('id').primary();
        table.string('nome').notNullable();
        table.string('email').unique().notNullable();
        table.string('password_hash').notNullable();
        table.string('senha_reset_token');
        table.string('senha_reset_expiracao');
        table.string('now');
        table.timestamps();

    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('usuarios');
};