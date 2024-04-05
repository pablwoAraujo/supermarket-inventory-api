const UsuarioService = require('../services/usuarioService');

const usuarioService = new UsuarioService();

class UsuarioController {
  static async cadastrarUsuario(req, res) {
    const { nome, email, senha } = req.body;

    try {
      const usuario = await usuarioService.cadastrarUsuario({ nome, email, senha })
      res.status(201).json(usuario)
    } catch (error) {
      console.log('Message error: ', error.message)
      res.status(400).send({ message: error.message })
    }
  }

  static async buscarTodosUsuarios(req, res) {
    res.status(204).send();
  }

  static async buscarUsuarioPorId(req, res) {
    res.status(204).send();
  }

  static async deletarUsuarioPorId(req, res) {
    res.status(204).send();
  }

  static async editarUsuario(req, res) {
    res.status(204).send();
  }
}

module.exports = UsuarioController