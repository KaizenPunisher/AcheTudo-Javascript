exports.up = function(knex) {
    
    return knex.schema.createTable('empresas', function(table){
        
        table.string('id').primary();
        table.string('razao_social').nullable();
        table.string('nome_fantasia').nullable();
        table.string('nome').nullable();
        table.string('cnpj').nullable();
        table.string('cpf').nullable();
        table.boolean('orgao_publico').nullable();
        table.string('horario_de_atendimento').nullable();
        table.string('descricao').nullable();
        //table.timestamps();

        table.integer('servico_id').unsigned();

        table.foreign('servico_id').references('id').inTable('servicos');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('empresas');
};
