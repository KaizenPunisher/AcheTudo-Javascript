const crypto = require('crypto');
const connection = require('../database/connection');

module.exports = {

    async listarEmpresa(request, response){
        
        const [count] = await connection('empresas').count();

        const { page = 1 } = request.query;

        
        const empresas = await connection('empresas')
            .join('servicos', 'servicos.id', '=', 'empresas.servico_id')
            .leftJoin('telefones')
            .limit(5)
            .offset((page-1)*5)
            .select([
                'empresas.*',
                'servicos.id as servico_id',
                'servicos.empreendimento',
                'servicos.adm_id',
                'telefones.id as telefone_id',
                'telefones.ddd',
                'telefones.numero',
                'telefones.tipo',
                'telefones.descricao as telefone_descricao'
            ]);
        ;
        
        /*
        const [count] = await connection('servicos').count();

        const { page = 1 } = request.query;

        const servicos = await connection('servicos')
            .join('empresas', 'servico_id', '=', 'servicos.id')
            .leftJoin('telefones', 'empresa_id', '=', 'empresas.id')
            .limit(5)
            .offset((page-1)*5)
            .select([
                'servicos.*',
                'empresas.*',
                'telefones.*',
                'telefones.id as telefone_id'
            ]);
        ;
        */
        response.header('X-Total-Count', count['count(*)']);

        return response.json(empresas);
        
    },

    async cadastrarEmpresa(request, response) {

        const id = crypto.randomBytes(4).toString('HEX');
        const { 
            razao_social, 
            nome_fantasia, 
            nome, 
            cnpj, 
            cpf, 
            orgao_publico, 
            horario_de_atendimento, 
            descricao,
            servico_id 
        
        } = request.body;
    
        await connection('empresas').insert({
            id, 
            razao_social,
            nome_fantasia,
            nome,
            cnpj,
            cpf,
            orgao_publico,
            horario_de_atendimento,
            descricao,
            servico_id
        })
    
        return response.json({ id });
    },

    async deletarEmpresa(request, response) {
        const { id } = request.params;
        const empresa_id = request.headers.authorization;

        const empresa = await connection('empresas')
            .where('id', id)
            .select('id')
            .first()
        ;
        if (empresa.id != empresa_id){
            return response.status(401).json({ error: 'Operação não permitida. Empresa não cadastrada' });
        }
        
        const telefone = await connection('telefones')
            .where('empresa_id', empresa_id)
            .select('*')
        ;
        if (telefone.empresa_id != 'null'){
            await connection('empresas').where('id', id).delete();
            return response.status(204).send();
            
        }

        await connection('telefones').where('empresa_id', empresa_id).delete();
        await connection('empresas').where('id', id).delete();

        return response.status(204).send();
    },
};