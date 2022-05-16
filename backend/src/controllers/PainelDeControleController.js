const connection = require('../database/connection');
const Empresa = require("../models/Empresa");
const Endereco = require("../models/Endereco");
const Telefone = require("../models/Telefone");
const Anuncio = require("../models/Anuncio");

module.exports = {
    async encontrarEmpresa(request, response){
        const { id } = request.params;

        const empresa = await connection('empresas')
            .join('servicos', 'servicos.id', '=', 'empresas.servico_id')
            .leftJoin('enderecos', 'enderecos.empresa_id', '=', 'empresas.id')
            .leftJoin('telefones', 'telefones.empresa_id', '=', 'empresas.id')
            .where('usuario_id', id)
            .select([
                'usuario_id',
                'empresas.*',
                'servicos.id as servico_id',
                'servicos.empreendimento',
                'enderecos.id as endereco_id',
                'enderecos.logradouro',
                'enderecos.cep',
                'enderecos.bairro',
                'enderecos.cidade',
                'enderecos.regiao',
                'enderecos.uf',
                'enderecos.descricao as endereco_descricao',
                'enderecos.empresa_id',
                'telefones.id as telefone_id',
                'telefones.ddd',
                'telefones.numero',
                'telefones.tipo',
                'telefones.descricao as descricao_telefone'
            ]);
        ;

        return response.json(empresa);
    },

    async cadastrarEmpresa(request, response){
        console.log(request.file);
        const empresa = new Empresa(request.body);
        const endereco = new Endereco(request.body);
        const telefone = new Telefone(request.body);
        //const anuncio = new Anuncio(request.file);
        //console.log(anuncio);
        //const cadastrar = await empresa.cadastrar();
        //await endereco.cadastrar(cadastrar.id);
        //await telefone.cadastrar(cadastrar.id);
        //await anuncio.cadastrar(cadastrar.id);
        
        return response.json(request.file);

    },

    async alterarEmpresa(request, response){
        const { id }  = request.params;
        const empresa = new Empresa(request.body);
        const endereco = new Endereco(request.body);
        const telefone = new Telefone(request.body);
        const anuncio = new Anuncio(request.body);
        console.log(anuncio);
        //const alterar = await empresa.alterar(id);
        //await endereco.alterar(alterar.id);
        //await telefone.alterar(alterar.id);
        //await anuncio.alterar(cadastrar.id);
        
        return response.json(anuncio);
    }
}