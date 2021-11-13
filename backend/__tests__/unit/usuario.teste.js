const Usuario = require("../../src/models/Usuario");
const connection = require('../../src/database/connection');
const bcrypt = require("bcryptjs");

describe('Autenticação', () => {
    
    beforeEach(async () => {
        await connection.migrate.rollback();
        await connection.migrate.latest();
        await connection.migrate.forceFreeMigrationsLock();
    });

    it('', async ()=>{
        
        const usuario = new Usuario({nome: 'Oscar', email: 'oscar@gomes.com', password: '123456'});
        const cadastrar = await usuario.cadastrar();
        console.log(cadastrar);
        
        const comparacao = await bcrypt.compare("123456", usuario.password_hash);

        expect(comparacao).toBe(true);
        
        await connection.destroy();
    });
});