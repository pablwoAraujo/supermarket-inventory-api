const { Router } = require('express');
const RoleController = require('../controllers/roleController');

const router = Router();

router
  .post('/role', RoleController.cadastrarRole)
  .get('/role', RoleController.buscarTodasAsRoles)
  .get('/role/id/:id', RoleController.buscarRolePorId)
  .put('/role/id/:id', RoleController.editarRolePorId)
  .delete('/role/id/:id', RoleController.deletarRolePorId);

module.exports = router;