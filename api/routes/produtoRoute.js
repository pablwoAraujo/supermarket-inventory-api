const { Router } = require('express');
const ProdutoController = require('../controllers/produtoController');

const router = Router();
const roles = require('../middleware/roles');
const permissoes = require('../middleware/permissooes');
const permissoesRoles = require('../middleware/permissoesRoles');

router
  .post('/produto', permissoesRoles(['criar produto']), ProdutoController.cadastrarProduto)
  .get('/produto', permissoesRoles(['ver produto']), ProdutoController.buscarTodosProdutos)
  .get('/produto/id/:id', roles(['usuario', 'gerente', 'adm']), permissoes(['ver produto']), ProdutoController.buscarProdutoPorId)
  .delete('/produto/id/:id', permissoesRoles(['remover produto']), ProdutoController.deletarProdutoPorId)
  .put('/produto/id/:id', permissoesRoles(['editar produto']), ProdutoController.editarProduto);

module.exports = router;