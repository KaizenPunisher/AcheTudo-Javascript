exports.up = function(knex) {

    return knex.schema.createTable('enderecos', function(table){
        
        table.increments('id').primary();
        table.string('logradouro').notNullable();
        table.string('cep').notNullable();
        table.string('bairro').notNullable();
        table.string('cidade').notNullable();
        table.string('regiao').notNullable();
        table.string('uf').notNullable();
        table.string('descricao').notNullable();

        table.string('empresa_id').notNullable();

        table.foreign('empresa_id').references('id').inTable('empresas');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('enderecos');
};