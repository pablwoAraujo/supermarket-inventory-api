const { Router } = require('express');
const ProdutoController = require('../controllers/produtoController');

const router = Router();
const roles = require('../middleware/roles');

router
  .post('/produto', roles(['adm']), ProdutoController.cadastrarProduto)
  .get('/produto', roles(['usuario', 'gerente', 'adm']), ProdutoController.buscarTodosProdutos)
  .get('/produto/id/:id', roles(['usuario', 'gerente', 'adm']), ProdutoController.buscarProdutoPorId)
  .delete('/produto/id/:id',roles(['adm']), ProdutoController.deletarProdutoPorId)
  .put('/produto/id/:id', roles(['gerente', 'adm']), ProdutoController.editarProduto);

module.exports = router;