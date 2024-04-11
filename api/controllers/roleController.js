const RoleService = require('../services/roleService')
const roleService = new RoleService()

class RoleController {
  static async cadastrarRole(req, res) {
    const { nome, descricao } = req.body;

    try {
      const role = await roleService.cadastrarRole({ nome, descricao });

      res.status(201).send(role);
    } catch (error) {
      res.status(400).send(error.message);
    }
  }

  static async buscarTodasAsRoles(req, res) {
    const roles = await roleService.buscarTodasAsRoles();

    res.status(200).json(roles);
  }

  static async buscarRolePorId(req, res) {
    try {
      const { id } = req.params;
      const role = await roleService.buscarRolePorId(id);

      res.status(200).json(role);
    } catch (error) {
      console.log('Message error: ', error.message);
      res.status(404).send({ message: error.message });
    }
  }

  static async editarRolePorId(req, res) {
    res.status(201).send();
  }

  static async deletarRolePorId(req, res) {
    res.status(201).send();
  }
}

module.exports = RoleController;