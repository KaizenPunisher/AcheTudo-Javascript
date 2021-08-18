const express = require('express');
const routes = express.Router();

const SessionController = require('./controllers/SessionController');
const EmpresaController = require('./controllers/EmpresaController');
const ServicoController = require('./controllers/ServicoController');
const TelefoneController = require('./controllers/TelefoneController');

routes.post('/session', SessionController.criarSessao);

routes.get('/empresa', EmpresaController.listarEmpresa);
routes.post('/empresa', EmpresaController.cadastrarEmpresa);
routes.delete('/empresa/:id', EmpresaController.deletarEmpresa);

routes.get('/servico', ServicoController.listarServico);
routes.post('/servico', ServicoController.cadastrarServico);
routes.delete('/servico/:id', ServicoController.deletarServico);

routes.get('/telefone', TelefoneController.listarTelefone);
routes.post('/telefone', TelefoneController.cadastrarTelefone);
routes.delete('/telefone/:id', TelefoneController.deletarTelefone); 

module.exports = routes;