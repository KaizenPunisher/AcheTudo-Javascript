const connection = require('../database/connection');

class Usuario {
    constructor({nome, email, password_hash}){
        this.nome          = nome
        this.email         = email
        this.password_hash = password_hash
    }

    async listar(){
        const listagem = await connection('usuarios').select('*');
        return listagem;
    }

    async cadastrar() {
        const [cadastro] = await connection('usuarios').insert({
            nome: this.nome,
            email: this.email,
            password_hash: this.password_hash,
        });
        
        return {id: cadastro};
    }
}

module.exports = Usuario;