const jwt = require('jsonwebtoken');
const { promisify } = require('util');

module.exports = async (request, response, next) => {
    
    const autorizacaoHeader = request.headers.authorization;

    if (!autorizacaoHeader){
        return response.status(401).json({ message: 'Não existe Token' });
    }

    const [, token] = autorizacaoHeader.split('  ');

    try {
        //console.log(token);
        //console.log(process.env.APP_SECRET);
        
        const decoded = await promisify(jwt.verify(token, process.env.APP_SECRET))();
        console.log(decoded.id);
        request.usuarioId = decoded.id;

        return next()
    } 
    catch (error) {
        return response.status(401).json({ message: 'Token Invalido' });
    }

};