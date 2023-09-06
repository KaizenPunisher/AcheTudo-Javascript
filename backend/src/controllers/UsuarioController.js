const connection = require('../database/connection');
const Usuario = require("../models/Usuario");

module.exports = {
    async cadastrarUsuario(request, response){
        const usuario = new Usuario(request.body);
        if(!usuario.nome || !usuario.email || !usuario.senha){
            return response.status(401).json({ error: 'Usuário incompleto, preencha todos os campos' });
        }
        else {
            const cadastrar = await usuario.cadastrar();
            return response.json(cadastrar);
        }
    },

    async reenviarCodigo(request, response){
        const usuario = new Usuario(request.body);
        const reenviarCodigo = await usuario.reenviarCodigo();
        return response.json(reenviarCodigo);
    },

    async ativarEmail(request, response){
        const usuario = new Usuario(request.body);
        const ativar = await usuario.ativar();
        return response.json(ativar);
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