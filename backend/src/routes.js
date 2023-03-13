const express = require('express');
const { celebrate, Segments, Joi } = require('celebrate');
const multer = require('multer');
const multerConfig = require('./config/multer');

const SessaoController = require('./controllers/SessaoController');
const PainelDeControleController = require('./controllers/PainelDeControleController');
const AutenticacaoUsuario = require('./controllers/middlewares/AutenticacaoUsuario');
const EmpresaController = require('./controllers/EmpresaController');
const EnderecoController = require('./controllers/EnderecoController');
const ServicoController = require('./controllers/ServicoController');
const TelefoneController = require('./controllers/TelefoneController');
const UsuarioController = require('./controllers/UsuarioController');
const AnuncioController = require('./controllers/AnuncioController');

const routes = express.Router();

routes.get('/inicio', 
    celebrate({[Segments.QUERY]: Joi.object().keys({
        page: Joi.number(),
        })
    }), 
    EmpresaController.listarEmpresas
);

routes.post('/usuario', UsuarioController.cadastrarUsuario);
routes.get('/usuario', UsuarioController.listarUsuarios);
routes.post('/esqueciasenha', UsuarioController.esqueciSenha);
routes.post('/resetsenha', UsuarioController.resetSenha);
routes.post('/reenviarcodigo' , UsuarioController.reenviarCodigo);
routes.post('/ativaremail', UsuarioController.ativarEmail);

routes.post('/sessao', SessaoController.criarSessao);

routes.get('/paineldecontrole/:id', 
    AutenticacaoUsuario, 
    PainelDeControleController.encontrarEmpresa
);
routes.post('/paineldecontrole',
    AutenticacaoUsuario,
    multer(multerConfig).single('imagem'),
    PainelDeControleController.cadastrarEmpresa,
);
routes.put('/paineldecontrole/:id', 
    AutenticacaoUsuario, 
    multer(multerConfig).single('imagem'), 
    PainelDeControleController.alterarEmpresa
);

routes.get('/anuncio', AnuncioController.listarAnuncio);


routes.get('/empresa', 
    celebrate({[Segments.QUERY]: Joi.object().keys({
        page: Joi.number(),
        })
    }), EmpresaController.listarEmpresas);
routes.post('/empresa',/*
    multer(multerConfig).single('file'),/*
    celebrate({[Segments.BODY]: Joi.object().keys({
            razao_social: Joi.string().required(),
            nome_fantasia: Joi.string().required(),
            nome: Joi.string().required(),
            cnpj: Joi.string().required(),
            cpf: Joi.string().required(),
            setor: Joi.string().required(),
            horario_de_atendimento: Joi.string().required(),
            descricao: Joi.string().required(),
            rede_sociais: Joi.string().required(),
            servico_id: Joi.number().required(),
            logradouro: Joi.string().required(),
            cep: Joi.string().required(),
            bairro: Joi.string().required(),
            cidade: Joi.string().required(),
            regiao: Joi.string().required(),
            uf: Joi.string().required().length(2),
            descricao_endereco: Joi.string(),
        }),
    }),*/ 
    EmpresaController.cadastrarEmpresa);
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