const connection = require('../database/connection');

module.exports = {

    async listarTelefone(request, response) {
        const empresa_id = request.headers.authorization;
        const telefone = await connection('telefones').where('empresa_id', empresa_id).select('*');
    
        return response.json(telefone);
    },

    async cadastrarTelefone(request, response) {
        const {
            ddd,
            numero,
            tipo,
            descricao
        } = request.body;

        const empresa_id = request.headers.authorization;

        const [id] = await connection('telefones').insert({
            ddd,
            numero,
            tipo,
            descricao,
            empresa_id,
        })
    
        return response.json({ id });
    },

    async deletarTelefone(request, response) {
        const { id } = request.params;
        const empresa_id = request.headers.authorization;

        const telefone = await connection('telefones')
            .where('id', id)
            .select('empresa_id')
            .first()
        ;
        
        if (telefone.empresa_id != empresa_id){
            return response.status(401).json({ error: 'Operação não permitida.' });
        }

        await connection('telefones').where('id', id).delete();

        return response.status(204).send();
    },

};