exports.up = function(knex) {
    return knex.schema.createTable('enderecos', function(table){
        table.increments('id');
        table.string('logradouro').nullable();
        table.string('cep').nullable();
        table.string('bairro').nullable();
        table.string('cidade').nullable();
        table.string('regiao').nullable();
        table.string('uf').nullable();
        table.string('descricao').nullable();

        table.string('empresa_id').nullable();

        table.foreign('empresa_id').references('id').inTable('empresas');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('enderecos');
};