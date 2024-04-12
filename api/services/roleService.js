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
    const roles = await database.roles.findAll();

    return roles;
  }

  async buscarRolePorId(id) {
    const role = await database.roles.findOne({
      where: { id }
    });

    if (!role) {
      throw new Error('Role informada não existe!');
    }

    return role;
  }

  async editarRolePorId(dto) {
    const role = await database.roles.findOne({
      where: {
        id: dto.id
      }
    });

    if (!role) {
      throw new Error('Role informada não existe!');
    }

    try {
      role.nome = dto.nome;
      role.descricao = dto.descricao;

      await role.save();
      return await role.reload();
    } catch (error) {
      console.error('Message error: ', error.message);
      throw error;
    }
  }

  async deletarRolePorId(id) {
    const role = await database.roles.findOne({
      where: { id }
    });

    if (!role) {
      throw new Error('Role informada não existe!');
    }

    try {
      await database.roles.destroy({
        where: { id }
      });
    } catch (error) {
      console.error('Message error: ', error.message);
      throw error;
    }
  }
}

module.exports = RoleService;