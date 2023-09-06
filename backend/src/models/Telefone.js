const connection = require('../database/connection');

class Telefone {
    constructor({ddd, numero, tipo, descricao_telefone}){
        this.ddd       = ddd
        this.numero    = numero
        this.tipo      = tipo
        this.descricao_telefone = descricao_telefone
    }

    async listar(){
        const listagem = await connection('usuarios').select('*');
        return listagem;
    }

    async encontrar(){
        const [usuario] = await connection('usuarios').where('email', this.email).select('*');
        return usuario;
    }

    async cadastrar(empresa_id) {
        const [cadastro] = await connection('telefones').insert({
            ddd:        this.ddd,
            numero:     this.numero,
            tipo:       this.tipo,
            descricao:  this.descricao_telefone,
            empresa_id: empresa_id,
        }).returning('id');
        
        return {id: cadastro};
    }

    async alterar(empresa_id){

        const encontrar = await connection('telefones')
            .where('empresa_id', empresa_id)
            .select('empresa_id')
            .first()
        ;

        if (!encontrar){
            return { error: 'Operação não permitida.' };
        }

        await connection('telefones').where('empresa_id', empresa_id).update({
            ddd:        this.ddd,
            numero:     this.numero,
            tipo:       this.tipo,
            descricao:  this.descricao_telefone,
        });

        return encontrar;
    }
}

module.exports = Telefone;