const connection = require('../database/connection');
const { response } = require('express');

class Anuncio {
    constructor({originalname, size, filename, empresa_id}){
        this.imagem     = originalname
        this.tamanho    = size
        this.key        = filename
        this.url        = `${process.env.APP_URL}/files/${filename}`
        this.empresa_id = empresa_id
    }

    async listar(){
        const listagem = await connection('anuncios').select('*');
        return listagem;
    }

    async encontrar(){
        const [anuncio] = await connection('anuncios').where('empresa_id', this.empresa_id).select('*');
        return anuncio;
    }

    async cadastrar() {
        const [cadastro] = await connection('anuncios').insert({
            imagem:     this.imagem,
            tamanho:    this.tamanho,
            key:        this.key,
            url:        this.url,
            empresa_id: this.empresa_id,
        });
        
        return {id: cadastro};
    }
}

module.exports = Anuncio;