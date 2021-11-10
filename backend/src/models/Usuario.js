const connection = require('../database/connection');

class Usuario {
    nome
    email
    password_hash

    constructor(nome, email, password_hash){
        this.nome          = nome
        this.email         = email
        this.password_hash = password_hash
    }
    
    async cadastrar() {
        await connection('usuarios').insert({
            nome,
            email,
            password_hash
        });

        return response.json({ id });
    }
}

module.exports = Usuario;

