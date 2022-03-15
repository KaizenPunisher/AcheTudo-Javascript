const Empresa = require("../models/Empresa");
const Endereco = require("../models/Endereco");
const Telefone = require("../models/Telefone");
const Usuario = require("../models/Usuario");

module.exports = {
    async listarEmpresa(request, response){
        const { id } = request.params;
        const token = request.headers.authorization;

        const empresa = await connection('empresas')
            .where('usuario_id', id)
            .select('usuario_id')
            .first()
        ;
        
        if (empresa.usuario_id != token){
            return response.status(401).json({ error: 'Operação não permitida.' });
        }

        return response.json(empresa);
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