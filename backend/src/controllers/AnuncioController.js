const connection = require('../database/connection');
const Anuncio = require("../models/Anuncio");

module.exports = {
    async listarAnuncio(request, response){
        const anuncio = new Anuncio(request.body);
        const listar = await anuncio.listar();
        return response.json(listar);
    }
}