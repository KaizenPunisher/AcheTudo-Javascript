const connection = require('../database/connection');

module.exports = {

    async listarEndereco(request, response) {
        const empresa_id = request.headers.authorization;
        const endereco = await connection('enderecos').where('empresa_id', empresa_id).select('*');
    
        return response.json(endereco);
    },
    async alterarEndereco(request, response) {

        const { id } = request.params;
        const empresa_id = request.headers.authorization;
        const { 
            logradouro,
            cep,
            bairro,
            cidade,
            regiao,
            uf,
            descricao
         } = request.body;

        const endereco = await connection('enderecos')
            .where('id', id)
            .select('empresa_id')
            .first()
        ;

        if (endereco.empresa_id != empresa_id){
            return response.status(401).json({ error: 'Operação não permitida.' });
        }

        await connection('enderecos').where('id', id).update({ 
            logradouro,
            cep,
            bairro,
            cidade,
            regiao,
            uf,
            descricao
        });
    
        return response.status(204).send();
    },
    async deletarEndereco(request, response) {
        const { id } = request.params;
        const empresa_id = request.headers.authorization;

        const endereco = await connection('enderecos')
            .where('id', id)
            .select('empresa_id')
            .first()
        ;
        
        if (endereco.empresa_id != empresa_id){
            return response.status(401).json({ error: 'Operação não permitida.' });
        }

        await connection('enderecos').where('id', id).delete();

        return response.status(204).send();
    },
};