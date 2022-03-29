const connection = require('../database/connection');
const Empresa = require("../models/Empresa");
const Endereco = require("../models/Endereco");
const Telefone = require("../models/Telefone");

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
                'telefones.descricao as telefone_descricao'
            ]);
        ;

        return response.json(empresa);
    },

    async cadastrarEmpresa(request, response){
        const empresa = new Empresa(request.body);
        const endereco = new Endereco(request.body);
        const telefone = new Telefone(request.body);
        
        const cadastrar = await empresa.cadastrar();
        await endereco.cadastrar(cadastrar.id);
        await telefone.cadastrar(cadastrar.id);
        
        return response.json(cadastrar);

    },

    async alterarEmpresa(request, response){
        const { id }  = request.params;
        const empresa = new Empresa(request.body);
        const endereco = new Endereco(request.body);
        const telefone = new Telefone(request.body);
        
        const alterar = await empresa.alterar(id);
        //await endereco.alterar(alterar.id);
        //await telefone.alterar(alterar.id);
        
        return response.json(alterar);
    }
}