const crypto = require('crypto');
const connection = require('../database/connection');

module.exports = {

    async index(request, response){
        const [count] = await connection('empresas').count();

        const { page = 1 } = request.query;

        const empresas = await connection('empresas')
            .join('telefones', 'empresa_id', '=', 'empresas.id')
            .limit(5)
            .offset((page-1)*5)
            .select([
                'empresas.razao_social',
                'empresas.nome_fantasia',
                'empresas.nome',
                'empresas.cnpj',
                'telefones.*',
                'empresas.id'
            ]);
        ;
        
        response.header('X-Total-Count', count['count(*)']);

        return response.json(empresas);
    },

    async listarEmpresa(request, response) {
        const empresas = await connection('empresas').select('*');
    
        return response.json(empresas);
    },

    async cadastrarEmpresa(request, response) {
        const { 
            razao_social, 
            nome_fantasia, 
            nome, 
            cnpj, 
            cpf, 
            orgao_publico, 
            horario_de_atendimento, 
            descricao 
        
        } = request.body;
    
        const id = crypto.randomBytes(4).toString('HEX');
    
        await connection('empresas').insert({
            id, 
            razao_social,
            nome_fantasia,
            nome,
            cnpj,
            cpf,
            orgao_publico,
            horario_de_atendimento,
            descricao
        })
    
        return response.json({ id });
    }
};