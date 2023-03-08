//const connection = require('../database/connection');
const Empresa = require("../models/Empresa");
const Endereco = require("../models/Endereco");

const { listarTelefone } = require('./TelefoneController');
const crypto = require('crypto');

const Anuncio = require("../models/Anuncio");
//const { leftJoin } = require("../database/connection");

module.exports = {

    async listarEmpresas(request, response){
        
        const [count] = await connection('empresas').count();
        
        const { page = 1 } = request.query;
        
        const empresas = await connection('empresas')  
            .leftJoin('servicos', 'empresas.id', 'servicos.id')
            .leftJoin('enderecos', 'empresas.id', 'enderecos.id')
            .leftJoin('telefones', 'empresas.id', 'telefones.id')
            .leftJoin('anuncios', 'empresas.id', 'anuncios.id')
            .limit(5)
            .offset((page-1)*5)
            .orderBy('id')
            .select([
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
                'telefones.descricao as descricao_telefone',
                'anuncios.id as anuncios_id',
                'anuncios.imagem',
                'anuncios.tamanho',
                'anuncios.key',
                'anuncios.url'
            ])
        ;
        //response.header('X-Total-Count', count['count(*)']);
        response.header('X-Total-Count', count['count']);
        
        return response.json(empresas);  
    },
    async cadastrarEmpresa(request, response){
        const empresa = new Empresa(request.body);
        const endereco = new Endereco(request.body);

        const cadastrar = await empresa.cadastrar();
        await endereco.cadastrar(cadastrar.id);

        return response.json(cadastrar);
    },
    async cadastrarEmpres(request, response) {
        //console.log(request.file);
    
        //const id = crypto.randomBytes(4).toString('HEX');
        /*
        const { 
            razao_social,
            nome_fantasia,
            cnpj,
            cpf,
            setor,
            horario_de_atendimento,
            descricao,
            redes_sociais,
            servico_id,
            logradouro,
            cep,
            bairro,
            cidade,
            regiao,
            uf,
            descricao_endereco
        } = request.body;
        
        await connection('empresas').insert({ 
            razao_social,
            nome_fantasia,
            cnpj,
            cpf,
            setor,
            horario_de_atendimento,
            descricao,
            redes_sociais,
            servico_id
        });
        
        await connection('enderecos').insert({
            logradouro: logradouro,
            cep: cep,
            bairro: bairro,
            cidade: cidade,
            regiao: regiao,
            uf: uf,
            descricao: descricao_endereco,
            empresa_id: id
        });

        return response.json({ id });
        */
       /*
        const anuncio = new Anuncio(request.file);
        await anuncio.cadastrar();

        return response.json({Hello: 'word'});
        */
    },
    async deletarEmpresa(request, response) {
        const { id } = request.params;
        const empresa_id = request.headers.authorization;

        const empresa = await connection('empresas')
            .where('id', id)
            .select('id')
            .first()
        ;
        
        const telefone = await connection('telefones').where('empresa_id', empresa_id).select('*');
        
        if (empresa.id != empresa_id){
            return response.status(401).json({ error: 'Operação não permitida. Empresa não cadastrada' });
        }

        await connection('telefones').where('empresa_id', empresa_id).delete();
        await connection('enderecos').where('empresa_id', empresa_id).delete();
        await connection('empresas').where('id', id).delete();

        return response.status(204).send();
    },
};