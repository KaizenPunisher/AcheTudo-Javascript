const Usuario = require("../../src/models/Usuario");
const bcrypt = require("bcryptjs");

module.exports = {
    async criarSessao(request, response) {
        //const { email, senha } = request.body;
        const usuarioLogin = new Usuario(request.body);
        const usuario = await usuarioLogin.encontrar(usuarioLogin.email);
        
        if (!usuario){
            return response.status(401).json({ error: 'Usuario ou senha incorretos'});
        }

        const verificarSenha = await bcrypt.compare(request.body.senha, usuario.password_hash);

        if (!verificarSenha){
            return response.status(401).json({ error: 'Usuario ou senha incorretos'});
        }

        if (usuario.email_verificado===false){
            return response.status(401).json({ error: 'Email não está verificado'});
        }

        const token = await usuarioLogin.gerarToken(usuario.email);
        
        response.header('Authorization', token);

        return response.json({ 
            usuario: {
                id: usuario.id,
                nome: usuario.nome,
                email: usuario.email,
            },
            token: token
        });
    }
}