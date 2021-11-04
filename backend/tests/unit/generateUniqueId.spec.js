const  generateUniqueId = require('../../src/utils/generateUniqueId');

describe('Gerando ID unico', () => {
    it('should generate an unique ID', () => {
        const id = generateUniqueId();

        expect(id).toHaveLength(8);
    });
});