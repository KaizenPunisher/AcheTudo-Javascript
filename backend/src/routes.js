const express = require('express');
const { celebrate, Segments, Joi } = require('celebrate');

const SessionController = require('./controllers/SessionController');
const EmpresaController = require('./controllers/EmpresaController');
const EnderecoController = require('./controllers/EnderecoController');
const ServicoController = require('./controllers/ServicoController');
const TelefoneController = require('./controllers/TelefoneController');

const routes = express.Router();

routes.post('/session', SessionController.criarSessao);

routes.get('/empresa', 
    celebrate({[Segments.QUERY]: Joi.object().keys({
        page: Joi.number(),
        })
    }), EmpresaController.listarEmpresas);
routes.post('/empresa', 
    celebrate({[Segments.BODY]: Joi.object().keys({
        razao_social: Joi.string().required(),
        nome_fantasia: Joi.string().required(),
        nome: Joi.string().required(),
        cnpj: Joi.string().required(),
        cpf: Joi.string().required(),
        orgao_publico: Joi.boolean().required(),
        horario_de_atendimento: Joi.string().required(),
        descricao: Joi.string().required(),
        servico_id: Joi.string().required(),
        logradouro: Joi.string().required(),
        cep: Joi.string().required(),
        bairro: Joi.string().required(),
        cidade: Joi.string().required(),
        regiao: Joi.string().required(),
        uf: Joi.string().required().length(2),
    }),
}), EmpresaController.cadastrarEmpresa);
routes.delete('/empresa/:id', EmpresaController.deletarEmpresa);

routes.get('/endereco', 
    celebrate({[Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required(),
    }).unknown(),
}),EnderecoController.listarEndereco);
routes.put('/endereco/:id', EnderecoController.alterarEndereco);
routes.delete('/endereco/:id', EnderecoController.deletarEndereco);

routes.get('/telefone', TelefoneController.listarTelefone);
routes.post('/telefone', TelefoneController.cadastrarTelefone);
routes.delete('/telefone/:id', 
    celebrate({
        [Segments.PARAMS]: Joi.object().keys({
            id: Joi.number().required(),
        })
    }), TelefoneController.deletarTelefone); 

routes.get('/servico', ServicoController.listarServico);
routes.post('/servico', ServicoController.cadastrarServico);
routes.put('/servico/:id', ServicoController.alterarServico);
routes.delete('/servico/:id', ServicoController.deletarServico);

module.exports = routes;