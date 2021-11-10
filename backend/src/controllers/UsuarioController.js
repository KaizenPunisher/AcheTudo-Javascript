const Usuario = require("../models/Usuario");

module.exports = {
    async cadastrarUsuario(request, response){

        //const pessoa = new Usuario();

        console.log(request.body);
        return response.json(request.body);
    },
};