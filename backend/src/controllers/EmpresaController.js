const crypto = require('crypto');
const connection = require('../database/connection');

module.exports = {

    async listarEmpresa(request, response){
        const [count] = await connection('empresas').count();

        const { page = 1 } = request.query;

        const empresas = await connection('empresas')
            .leftJoin('telefones', 'empresa_id', '=', 'empresas.id')
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