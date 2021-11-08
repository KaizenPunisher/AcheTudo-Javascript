const app = require('./app');

// process.env.PORT procura alguma porta existente, caso contrario irá criar na 3333
app.listen(process.env.PORT || 3333);