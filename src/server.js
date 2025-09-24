//Importar modulos necesarios
const http = require('http');
const handleBookRouter = require('../src/routes/bookRoutes.js');

const server = http.createServer(( req, res) =>{
    handleBookRouter(req, res);
});

server.listen(3000,'0.0.0.0',()=>{
    console.log("Servidor corriendo en http://localhost:3000");
});