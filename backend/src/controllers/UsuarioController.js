const Usuario = require("../models/Usuario");

module.exports = {
    async cadastrarUsuario(request, response){
        const usuario = new Usuario(request.body);
        const cadastrar = await usuario.cadastrar();
        return response.json(cadastrar);
    },

    async esqueciSenha(request, response){
        const usuario = new Usuario(request.body);
        const esquecisenha = await usuario.esqueciSenha();
        return response.json(esquecisenha);
    },

    async resetSenha(request, response){
        const usuario = new Usuario(request.body);
        const resetSenha = await usuario.resetSenha();
        return response.json(resetSenha);
    },

    async listarUsuarios(request, response){
        const usuario = new Usuario(request.body);
        const listar = await usuario.listar();
        return response.json(listar);
    }
};