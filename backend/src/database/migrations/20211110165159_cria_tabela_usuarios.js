exports.up = function(knex) {
    return knex.schema.createTable('usuarios', function(table){
        
        table.increments('id').primary();
        table.string('nome').notNullable();
        table.string('email').unique().notNullable();
        table.string('password_hash').notNullable();
        //table.date('created_at').notNullable();
        //table.date('updated_at').notNullable();
        
        table.timestamps();

        //table.integer('servico_id').unsigned();

        //table.foreign('servico_id').references('id').inTable('servicos');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('usuarios');
};
