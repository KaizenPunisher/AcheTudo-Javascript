const Usuario = require("../models/Usuario");


module.exports = {
    async cadastrarUsuario(request, response){
        const usuario = new Usuario(request.body);
        const cadastrar = await usuario.cadastrar();
        return response.json(cadastrar);
    },

    async listarUsuario(request, response){
        const usuario = new Usuario(request.body);
        const listar = await usuario.listar();
        return response.json(listar);
    }
};