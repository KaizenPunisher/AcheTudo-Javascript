const Empresa = require("../models/Empresa");
const Endereco = require("../models/Endereco");
const Telefone = require("../models/Telefone");

module.exports = {
    async inicio(request, response){
        return response.status(200).send();
    },

    async cadastrarEmpresa(request, response){
        const empresa = new Empresa(request.body);
        const endereco = new Endereco(request.body);
        const telefone = new Telefone(request.body);

        const cadastrar = await empresa.cadastrar();
        
        await endereco.cadastrar(cadastrar.id);
        await telefone.cadastrar(cadastrar.id);
        
        return response.json(cadastrar);

    }
}