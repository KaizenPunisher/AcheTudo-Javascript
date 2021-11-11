const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('EMPRESA', () => {
    beforeEach(async () => {
        await connection.migrate.rollback();
        await connection.migrate.latest();
    });
    
    it('Apto para cadastrar uma empresa', async () => {
        const response = await 
            request(app)
            .post('/empresa')
            // .set('Authorization', '1') setando o cabeçalho da requisição Athorization
            .send({
                razao_social: "Padaria 20",
                nome_fantasia: "Padaria pão queimado",
                nome: "João",
                cnpj: "333333333",
                cpf: "666666666666",
                orgao_publico: false,
                horario_de_atendimento: "4:45 as 17:30",
                descricao: "papaapaapapappaa",
                servico_id: 1,
                logradouro: "Rua 1",
                cep: "22222222",
                bairro: "Anguera",
                cidade: "Rio de Janeiro",
                regiao: "centro",
                uf: "RJ",
                descricao_endereco: "Proximo ao correio"
            })
        ;
        expect(response.body).toHaveProperty('id');
        expect(response.body.id).toHaveLength(8);
        
        // destroi a conexão do BD que ficou aberta durante a execução do teste
        await connection.destroy();
    });
});