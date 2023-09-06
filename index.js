const express = require('express');
const server = express();
const nomes = require('./src/data/nomes.json');
const pratos = require('./src/data/pratos.json');

server.get('/', (req,res) => {
    return res.json("André lindo")
})

server.get('/pratos', (req,res) => {
    return res.json(pratos);
});
server.get('/nomes', (req,res) => {
    return res.json(nomes);
});

server.listen(3000, () =>{
    console.log('Servidor está funcionando...');
});
