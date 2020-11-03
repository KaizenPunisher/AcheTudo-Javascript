exports.up = function(knex) {
    return knex.schema.createTable('servicos', function(table){
        table.increments('id');
        table.string('nome').nullable();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('servicos');
};