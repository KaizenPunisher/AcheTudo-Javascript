exports.up = function(knex) {
    return knex.schema.createTable('anuncios', function(table){
        
        table.increments('id').primary();
        table.string('imagem').nullable();
        table.string('tamanho').nullable();
        table.string('key').nullable();
        table.string('url').nullable();
        table.string('descricao').nullable();
        table.timestamps();

        table.string('empresa_id').nullable();

        table.foreign('empresa_id').references('id').inTable('empresas');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('anuncios');
};
