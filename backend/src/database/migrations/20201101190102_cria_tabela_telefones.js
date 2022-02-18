exports.up = function(knex) {

    return knex.schema.createTable('telefones', function(table){
        
        table.increments('id');
        table.string('numero').nullable();
        table.string('ddd').nullable();
        table.string('tipo').nullable();
        table.string('descricao').nullable();
        table.timestamps();

        table.string('empresa_id').nullable();

        table.foreign('empresa_id').references('id').inTable('empresas');
    });    
};

exports.down = function(knex) {
    return knex.schema.dropTable('telefones');
};