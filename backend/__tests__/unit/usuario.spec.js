const Usuario = require("../../src/models/Usuario");
const connection = require('../../src/database/connection');
const bcrypt = require("bcryptjs");

describe('Usuario', () => {
    
    beforeEach(async () => {
        await connection.migrate.forceFreeMigrationsLock();
        await connection.migrate.rollback();
        await connection.migrate.latest();
        
    });

    it('Cadastrando Usuario com HASH', async ()=>{
        
        const usuario = new Usuario({nome: 'Oscar', email: 'oscar@gomes.com', password: '123456'});
        const cadastrar = await usuario.cadastrar();
        console.log(cadastrar);
        
        const comparacao = await bcrypt.compare("123456", usuario.password_hash);

        expect(comparacao).toBe(true);
        
        await connection.destroy();
    });

});