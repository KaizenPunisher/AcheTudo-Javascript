const connection = require('../database/connection');
const Usuario = require("../../src/models/Usuario");
const bcrypt = require("bcryptjs");

module.exports = {
    async criarSessao(request, response) {
        const { email, password } = request.body;
        const usuario = new Usuario(request.body);
        //console.log(usuario);
        const encontrarUsuario = await usuario.encontrar();

        if (!encontrarUsuario){
            return response.status(401).json({ error: 'Usuario não existe'});
        }
        console.log(encontrarUsuario.password_hash);
        const verificarSenha = await bcrypt.compare(password, encontrarUsuario.password_hash);

        if (!verificarSenha){
            return response.status(401).json({ error: 'Senha incorreta'});
        }

        return response.status(200).send();
    }
}