const connection = require('../database/connection');
const bcrypt = require("bcryptjs");

class Usuario {
    constructor({nome, email, password}){
        this.nome          = nome
        this.email         = email
        this.password      = password

    }

    async listar(){
        const listagem = await connection('usuarios').select('*');
        return listagem;
    }

    async cadastrar() {
        const password_hash = await bcrypt.hash(this.password, 8);
        this.password_hash = password_hash

        const [cadastro] = await connection('usuarios').insert({
            nome: this.nome,
            email: this.email,
            password_hash: password_hash,
        });
        
        return {id: cadastro};
    }
}

module.exports = Usuario;