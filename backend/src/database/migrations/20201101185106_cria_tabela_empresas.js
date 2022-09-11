exports.up = function(knex) {
    
    return knex.schema.createTable('empresas', function(table){
        
        table.increments('id').primary();
        table.string('razao_social').nullable();
        table.string('nome_fantasia').nullable();
        table.string('cnpj').nullable();
        table.string('cpf').nullable();
        table.string('setor').nullable();
        table.string('horario_de_atendimento').nullable();
        table.string('descricao').nullable();
        table.string('redes_sociais').nullable();
        table.timestamps();

        table.integer('servico_id').unsigned();
        table.foreign('servico_id').references('id');

        table.string('usuario_id').unsigned();
        table.foreign('usuario_id').references('id');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('empresas');
};
