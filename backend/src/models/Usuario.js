const connection = require('../database/connection');
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');
const { response } = require('express');

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
        const password_hash = await bcrypt.hash(this.password, 8);
        this.password_hash = password_hash;

        const [cadastro] = await connection('usuarios').insert({
            nome: this.nome,
            email: this.email,
            password_hash: this.password_hash,
        });
        
        return {id: cadastro};
    }

    async gerarToken(){
        const [usuario] = await connection('usuarios').where('email', this.email).select('*');
        //console.log(usuario.id);
        this.id = usuario.id;
        return jwt.sign({ id: this.id }, process.env.APP_SECRET);
    }
}

module.exports = Usuario;