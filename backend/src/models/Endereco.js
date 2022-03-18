const connection = require('../database/connection');

class Endereco {
    constructor({logradouro, cep, bairro, cidade, regiao, uf, descricao_endereco}){
        this.logradouro             = logradouro 
        this.cep                    = cep
        this.bairro                 = bairro
        this.cidade                 = cidade
        this.regiao                 = regiao
        this.uf                     = uf
        this.descricao_endereco     = descricao_endereco
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
        const [cadastro] = await connection('enderecos').insert({
            logradouro:  this.logradouro,
            cep:         this.cep,
            bairro:      this.bairro,
            cidade:      this.cidade,
            regiao:      this.regiao,
            uf:          this.uf,
            descricao:   this.descricao_endereco,
            empresa_id:  empresa_id,
        });
        
        return {id: cadastro};
    }
}

module.exports = Endereco;