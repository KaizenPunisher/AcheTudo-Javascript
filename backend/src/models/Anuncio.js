//const connection = require('../database/connection');
const { response } = require('express');

class Anuncio {
    constructor({originalname, size, filename}){
        this.imagem     = originalname
        this.tamanho    = size
        this.key        = filename
        this.url        = `${process.env.APP_URL}/files/${filename}`
    }

    async listar(){
        const listagem = await connection('anuncios').select('*');
        return listagem;
    }

    async encontrar(){
        const [anuncio] = await connection('anuncios').where('empresa_id', this.empresa_id).select('*');
        return anuncio;
    }

    async cadastrar(empresa_id) {
        const [cadastro] = await connection('anuncios').insert({
            imagem:     this.imagem,
            tamanho:    this.tamanho,
            key:        this.key,
            url:        this.url,
            empresa_id: empresa_id,
        });
        
        return {id: cadastro};
    }

    async alterar(id){

        const encontrar = await connection('anuncios')
            .where('empresa_id', id)
            .select('id')
            .first()
        ;

        if (!encontrar){
            return { error: 'Operação não permitida.' };
        }

        await connection('empresas').where('empresa_id', id).update({
            imagem:     this.imagem,
            tamanho:    this.tamanho,
            key:        this.key,
            url:        this.url,
        });
        //console.log(encontrar);
        return encontrar;
    }

}

module.exports = Anuncio;