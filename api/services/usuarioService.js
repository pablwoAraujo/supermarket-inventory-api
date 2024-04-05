const uuid = require('uuid')
const database = require('../models');
const { hash } = require('bcryptjs');

class UsuarioService {
  async cadastrarUsuario(dto) {
    const usuario = await database.usuarios.findOne({
      where: {
        email: dto.email
      }
    });

    if (usuario) {
      throw new Error('Usuário já cadastrado');
    }

    try {
      const senhaHash = await hash(dto.senha, 8)

      const novoUsuario = await database.usuarios.create({
        id: uuid.v4(),
        nome: dto.nome,
        email: dto.email,
        senha: senhaHash
      });

      return novoUsuario;
    } catch (error) {
      console.error('Message error: ', error.message);
      throw new Error('Erro ao cadastrar usuário');
    }
  }

  async buscarTodosUsuarios() {
    const usuarios = await database.usuarios.findAll();
    return usuarios
  }

  async buscarUsuarioPorId(id) {
    const usuario = await database.usuarios.findOne({
      where: { id }
    });

    if (!usuario) {
      throw new Error('Usuário informado não cadastrado!')
    }
    return usuario
  }

  async deletarUsuarioPorId(id) {
    await this.buscarUsuarioPorId(id);

    try {
      await database.usuarios.destroy({
        where: { id }
      });
    } catch (error) {
      throw new Error('Erro ao tentar deletar o usuario!')
    }
  }

  async editarUsuario(dto) {
    return null;
  }
}

module.exports = UsuarioService;