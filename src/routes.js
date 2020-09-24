const express = require('express');
const routes = express.Router();
const produtoController = require('./controllers/produtoController');
const usuarioController = require('./controllers/usuarioController');


//Rotas Produtos
routes.get('/produtos',produtoController.listarprodutos);
routes.post('/produtos', produtoController.cadastrarProdutos);
routes.get('/produtos_id/:codigoProduto',produtoController.listarPeloCodigo);
routes.post('/produtos_id/:codigoProduto',produtoController.atualizarProduto);
routes.delete('/produtos_id/:codigoProduto',produtoController.removerProduto);
routes.get('/produtos/:nome',produtoController.listarProdutosPeloNome);

//Rotas Usuarios
routes.post('/usuarios',usuarioController.criarUsuario);
routes.post('/autentica', usuarioController.autenticaUsuario);

module.exports = routes;