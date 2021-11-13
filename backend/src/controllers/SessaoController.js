const connection = require('../database/connection');

module.exports = {
    async criarSessao(request, response) {
        /*
        const { id } = request.body;

        const usuario = await connection('usuarios')
            .where('id', id)
            .select('email')
            .first()
        ;

        if (!nome){
            return response.status(400).json({ error: 'Não existe nenhuma empresa com esse id'});
        }

        return response.json(usuario);
        */
        console.log();
        return response.status(200).send();
    }
}