const connection = require('../database/connection');

module.exports = {
    async criarSessao(request, response) {
        const { id } = request.body;

        const empresa = await connection('empresas')
            .where('id', id)
            .select('razao_social')
            .first()
        ;

        if (!empresa){
            return response.status(400).json({ error: 'Não existe nenhuma empresa com esse id'});
        }

        return response.json(empresa);
    }
}