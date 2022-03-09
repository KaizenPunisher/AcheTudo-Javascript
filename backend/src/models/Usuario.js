const connection = require('../database/connection');
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');
const crypto = require('crypto');

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

    async encontrar(){
        const [usuario] = await connection('usuarios').where('email', this.email).select('*');
        return usuario;
    }

    async cadastrar() {
        const id = crypto.randomBytes(4).toString('HEX');
        this.id = id;
        const password_hash = await bcrypt.hash(this.password, 8);
        this.password_hash = password_hash;

        const [cadastro] = await connection('usuarios').insert({
            id: this.id,
            nome: this.nome,
            email: this.email,
            password_hash: this.password_hash,
        });
        
        return {id: this.id};
    }

    async gerarToken(){
        const [usuario] = await connection('usuarios').where('email', this.email).select('*');
        this.id = usuario.id;
        //console.log(process.env.APP_SECRET);
        return jwt.sign({ id: this.id }, process.env.APP_SECRET);
    }
}

module.exports = Usuario;