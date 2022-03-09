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
        });
        
        return {id: cadastro};
    }

    async gerarToken(){
        const [usuario] = await connection('usuarios').where('email', this.email).select('*');
        this.id = usuario.id;
        //console.log(process.env.APP_SECRET);
        return jwt.sign({ id: this.id }, process.env.APP_SECRET);
    }
}

module.exports = Telefone;