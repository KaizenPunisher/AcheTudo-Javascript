exports.up = function(knex) {
    
    return knex.schema.createTable('empresas', function(table){
        
        table.string('id').primary();
        table.string('razao_social').notNullable();
        table.string('nome_fantasia').notNullable();
        table.string('nome').notNullable();
        table.string('cnpj').notNullable();
        table.string('cpf').notNullable();
        table.boolean('orgao_publico').notNullable();
        table.string('horario_de_atendimento').notNullable();
        table.string('descricao').nullable();
        //table.timestamps();

        table.integer('servico_id').unsigned();

        table.foreign('servico_id').references('id').inTable('servicos');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('empresas');
};
