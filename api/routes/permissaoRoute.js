const { Router } = require('express');
const PermissaoController = require('../controllers/permissaoController')

const router = Router();

router
  .post('/permissao', PermissaoController.cadastrarPermissao)
  .get('/permissao', PermissaoController.buscarTodasAsPermissoes)
  .get('/permissao/id/:id', PermissaoController.buscarPermissaoPorId)
  .delete('/permissao/id/:id', PermissaoController.deletarPermissaoPorId)
  .put('/permissao/id/:id', PermissaoController.editarPermissao);

module.exports = router;