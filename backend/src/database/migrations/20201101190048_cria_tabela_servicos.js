exports.up = function(knex) {

    return knex.schema.createTable('servicos', function(table){
        
        table.increments('id').primary();
        table.string('empreendimento');
        table.timestamps();

        table.integer('adm_id').unsigned();
        table.foreign('adm_id').references('id');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('servicos');
};