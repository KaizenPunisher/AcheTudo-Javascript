const request = require('supertest');
const app = require('../../src/app');
const Usuario = require("../../src/models/Usuario");
const connection = require('../../src/database/connection');

describe('Autenticação', () => {
    
    beforeEach(async () => {
        await connection.migrate.forceFreeMigrationsLock();
        await connection.migrate.rollback();
        await connection.migrate.latest();
        
    });

    afterAll(async () => {
        await connection.destroy();
    });

    it('Rota de autenticação com status de sucesso', async ()=>{
        
        const usuario = new Usuario({nome: 'Oscar', email: 'oscar@gomes.com', password: '123456'});
        const cadastrar = await usuario.cadastrar();
        //console.log(cadastrar);
        
        expect(cadastrar).toStrictEqual({"id": 1});
        
        const response = await 
            request(app)
            .post('/sessao')
            // .set('Authorization', '1') setando o cabeçalho da requisição Athorization
            .send(usuario)
        ;
        //console.log(process.env.APP_SECRET);
        expect(response.status).toBe(200);
        
    });

    it('Rota de autenticação com status invalida com credenciais invalidas', async ()=>{
        
        const usuario = new Usuario({nome: 'Oscar', email: 'oscar@gomes.com', password: '123456'});
        const cadastrar = await usuario.cadastrar();
        //console.log(cadastrar);
        
        expect(cadastrar).toStrictEqual({"id": 1});
        
        const response = await 
            request(app)
            .post('/sessao')
            // .set('Authorization', '1') setando o cabeçalho da requisição Athorization
            .send({
                nome: 'Oscar',
                email: usuario.email,
                password: '123123'
            })
        ;
        
        expect(response.status).toBe(401);
        
    });
    
    it('Recebendo token JWT autenticado', async ()=>{
        
        const usuario = new Usuario({nome: 'Oscar', email: 'oscar@gomes.com', password: '123456'});
        const cadastrar = await usuario.cadastrar();
        //console.log(cadastrar);
        
        expect(cadastrar).toStrictEqual({"id": 1});
        
        const response = await 
            request(app)
            .post('/sessao')
            // .set('Authorization', '1') setando o cabeçalho da requisição Athorization
            .send(usuario)
        ;
        
        expect(response.body).toHaveProperty('token');
        
    });
    
});