const express = require('express');
const server = express();
const dotenv = require('dotenv').config();
const mongoose = require('mongoose');
const requireDir = require('require-dir');
const cors = require('cors');

//Configurações
server.use(express.json()); 
server.use(cors());
//Banco de Dados
mongoose.connect(process.env.MONGODB,{useNewUrlParser: true, useUnifiedTopology: true});

// Models - deve ser colocado antes das rotas
requireDir('./src/models')

//Rotas
server.use(require('./src/routes'));

//Servidor
server.listen(process.env.PORT || 3002);
console.log(`Servidor ouvindo na porta ${process.env.PORT}`);