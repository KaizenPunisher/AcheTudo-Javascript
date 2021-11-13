const request = require('supertest');
const app = require('../../src/app');
const Usuario = require("../../src/models/Usuario");
const connection = require('../../src/database/connection');

describe('Autenticação', () => {
    
    beforeEach(async () => {
        await connection.migrate.rollback();
        await connection.migrate.latest();
    });

    it('Essa rota deve retornar um token JWT quando for chamada com credenciais', async ()=>{
        
        const usuario = new Usuario({nome: 'Oscar', email: 'oscar@gomes.com', password_hash: '123456'});
        /*
        const cadastrar = await usuario.cadastrar();
        
        console.log(cadastrar);
        
        expect(usuario.email).toBe('oscar@gomes.com');
        */
        
        const response = await 
            request(app)
            .post('/sessao')
            // .set('Authorization', '1') setando o cabeçalho da requisição Athorization
            .send({
                email: usuario.email,
                password: '123456'
            })
        ;
        
        expect(response.status).toBe(200);
        
        await connection.destroy();
    });
});