const connection = require('../database/connection');
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');
const crypto = require('crypto');

class Usuario {
    constructor({nome, email, senha}){
        this.nome       = nome
        this.email      = email
        this.senha      = senha
    }

    async listar(){
        const listagem = await connection('usuarios').select('*');
        return listagem;
    }

    async encontrar(email){
        const [usuario] = await connection('usuarios').where('email', email).select('*');
        return usuario;
    }

    async cadastrar() {
        const id = crypto.randomBytes(4).toString('HEX');
        this.id = id;
        const password_hash = await bcrypt.hash(this.senha, 8);
        this.senha = password_hash;

        const [cadastro] = await connection('usuarios').insert({
            id: this.id,
            nome: this.nome,
            email: this.email,
            password_hash: this.senha,
        });
        
        return {id: this.id};
    }

    async gerarToken(email){
        const [usuario] = await connection('usuarios').where('email', email).select('*');
        //this.id = usuario.id;
        //console.log(usuario);
        return jwt.sign({ id: usuario.id }, process.env.APP_SECRET);
    }
}

module.exports = Usuario;