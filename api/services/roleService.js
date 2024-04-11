const { v4: uuidv4 } = require('uuid');
const database = require('../models');

class RoleService {
  async cadastrarRole(dto) {
    const role = await database.roles.findOne({
      where: {
        nome: dto.nome
      }
    });

    if (role) {
      throw new Error('Role já cadastrada');
    }

    try {
      const newRole = await database.roles.create({
        id: uuidv4(),
        nome: dto.nome,
        descricao: dto.descricao,
      });

      return newRole;
    } catch (error) {
      console.error('Message error: ', error.message);
      throw error;
    }
  }

  async buscarTodasAsRoles() {
    return true;
  }

  async buscarRolePorId(id) {
    return true;
  }

  async editarRolePorId(id) {
    return true;
  }

  async deletarRolePorId(dto) {
    return true;
  }
}

module.exports = RoleService