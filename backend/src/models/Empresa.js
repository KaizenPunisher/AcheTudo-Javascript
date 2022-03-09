const connection = require('../database/connection');

class Empresa {
    constructor({
        razao_social, 
        nome_fantasia, 
        cnpj, 
        cpf, 
        setor, 
        horario_de_atendimento, 
        descricao, 
        redes_sociais, 
        servico_id
    })
    {
        this.razao_social           = razao_social 
        this.nome_fantasia          = nome_fantasia
        this.cnpj                   = cnpj
        this.cpf                    = cpf
        this.setor                  = setor
        this.horario_de_atendimento = horario_de_atendimento
        this.descricao              = descricao
        this.redes_sociais          = redes_sociais
        this.servico_id             = servico_id
    }

    async listar(){
        const listagem = await connection('empresas').select('*');
        return listagem;
    }

    async encontrar(){
        const [empresa] = await connection('empresas').where('email', this.email).select('*');
        return empresa;
    }

    async cadastrar() {
        const [cadastro] = await connection('empresas').insert({
            razao_social:           this.razao_social,
            nome_fantasia:          this.nome_fantasia,
            cnpj:                   this.cnpj,
            cpf:                    this.cpf,
            setor:                  this.setor,
            horario_de_atendimento: this.horario_de_atendimento,
            descricao:              this.descricao,
            redes_sociais:          this.redes_sociais,
            servico_id:             this.servico_id,
        });
        
        return {id: cadastro};
    }

    async gerarToken(){
        const [usuario] = await connection('empresas').where('email', this.email).select('*');
        this.id = usuario.id;
        //console.log(process.env.APP_SECRET);
        return jwt.sign({ id: this.id }, process.env.APP_SECRET);
    }
}

module.exports = Empresa;