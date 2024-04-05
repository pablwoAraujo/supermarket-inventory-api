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
    return null;
  }

  async buscarUsuarioPorId(id) {
    return null;
  }

  async deletarUsuarioPorId(id) {
    return null;
  }

  async editarUsuario(dto) {
    return null;
  }
}

module.exports = UsuarioService;