const { Router } = require('express');
const ProdutoController = require('../controllers/produtoController');

const router = Router();
const roles = require('../middleware/roles');
const permissoes = require('../middleware/permissooes');

router
  .post('/produto', roles(['adm']), permissoes(['criar produto']), ProdutoController.cadastrarProduto)
  .get('/produto', roles(['usuario', 'gerente', 'adm']), permissoes(['ver produto']), ProdutoController.buscarTodosProdutos)
  .get('/produto/id/:id', roles(['usuario', 'gerente', 'adm']), permissoes(['ver produto']), ProdutoController.buscarProdutoPorId)
  .delete('/produto/id/:id',roles(['adm']), permissoes(['remover produto']), ProdutoController.deletarProdutoPorId)
  .put('/produto/id/:id', roles(['gerente', 'adm']), permissoes(['editar produto']), ProdutoController.editarProduto);

module.exports = router;