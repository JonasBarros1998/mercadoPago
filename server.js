/**
 * Modulo para subir o servidor, utilizando a porta 5050
 */
const app = require('./src/config/custon-express.js');

app.listen(5050, () => {
    console.log('servidor rodando na porta 5050');
});