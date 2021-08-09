const express = require('express');
const routes = express.Router();

const SessionController = require('./controllers/SessionController');
const EmpresaController = require('./controllers/EmpresaController');
const TelefoneController = require('./controllers/TelefoneController');

routes.post('/session', SessionController.criarSessao);

routes.post('/empresa', EmpresaController.cadastrarEmpresa);
routes.get('/empresa', EmpresaController.index);

routes.post('/telefone', TelefoneController.cadastrarTelefone);
routes.get('/telefone', TelefoneController.listarTelefone);
routes.delete('/telefone/:id', TelefoneController.deletarTelefone); 

module.exports = routes;