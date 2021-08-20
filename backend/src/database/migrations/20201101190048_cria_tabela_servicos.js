exports.up = function(knex) {

    return knex.schema.createTable('servicos', function(table){
        
        table.increments('id').primary();
        table.string('empreendimento');
        table.string('adm_id');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('servicos');
};