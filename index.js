const express = require('express');
const server = express();
const pratos = require('./src/data/pratos.json');

server.use(cors());

server.get('/', (req,res) => {
    return res.json("API Personal Nutri")
})

server.get('/pratos', (req,res) => {
    return res.json(pratos);
});

server.listen(3000, () =>{
    console.log('Servidor em funcionamento...');
});
