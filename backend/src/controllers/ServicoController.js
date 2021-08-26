const connection = require('../database/connection');

module.exports = {

    async listarServico(request, response) {
        const adm_id = request.headers.authorization;
        const servico = await connection('servicos').where('adm_id', adm_id).select('*');
    
        return response.json(servico);
    },

    async cadastrarServico(request, response) {
        const {
            empreendimento,
        } = request.body;

        const adm_id = request.headers.authorization;

        const [id] = await connection('servicos').insert({
            empreendimento,
            adm_id,
        })
    
        return response.json({ id });
    },

    async alterarServico(request, response) {

        const { id }  = request.params;
        const { empreendimento } = request.body;
        const adm_id  = request.headers.authorization;

        const servico = await connection('servicos')
            .where('id', id)
            .select('adm_id')
            .first()
        ;

        if (servico.adm_id != adm_id){
            return response.status(401).json({ error: 'Operação não permitida.' });
        }

        await connection('servicos').where('id', id).update({ empreendimento });
    
        return response.status(204).send();
    },

    async deletarServico(request, response) {
        const { id } = request.params;
        const adm_id = request.headers.authorization;

        const servico = await connection('servicos')
            .where('id', id)
            .select('adm_id')
            .first()
        ;
        
        if (servico.adm_id != adm_id){
            return response.status(401).json({ error: 'Operação não permitida.' });
        }

        await connection('servicos').where('id', id).delete();

        return response.status(204).send();
    },

};