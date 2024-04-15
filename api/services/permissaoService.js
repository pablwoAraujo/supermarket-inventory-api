const { v4: uuidv4 } = require('uuid')
const database = require('../models')

class PermissaoService {
  async cadastrarPermissao(dto) {
    const permissao = await database.permissoes.findOne({
      where: {
        nome: dto.nome
      }
    });

    if (permissao) {
      throw new Error('Permissao já cadastrada');
    }

    try {
      const newPermissao = await database.permissoes.create({
        id: uuidv4(),
        nome: dto.nome,
        descricao: dto.descricao,
      });

      return newPermissao;
    } catch (error) {
      console.error('Message error: ', error.message);
      throw error;
    }
  }

  async buscarTodasAsPermissoes() {
    const permissoes = await database.permissoes.findAll();
    return permissoes;
  }

  async buscarPermissaoPorId(id) {
    const permissao = await database.permissoes.findOne({
      where: {
        id: id
      }
    });

    if (!permissao) {
      throw new Error('Permissao informada não cadastrada!');
    }

    return permissao;
  }

  async deletarPermissaoPorId(id) {
    const permissao = await database.permissoes.findOne({
      where: {
        id: id
      }
    });

    if (!permissao) {
      throw new Error('Permissao informada não cadastrada!');
    }

    try {
      await database.permissoes.destroy({
        where: {
          id: id
        }
      });
    } catch (error) {
      console.error('Message error: ', error.message);
      throw error;
    }
  }

  async editarPermissao(dto) {
    const permissao = await database.permissoes.findOne({
      where: {
        id: dto.id
      }
    });

    if (!permissao) {
      throw new Error('Permissao informada não cadastrada!');
    }

    try {
      permissao.nome = dto.nome;
      permissao.descricao = dto.descricao;

      await permissao.save();
      return await permissao.reload();
    } catch (error) {
      console.error('Message error: ', error.message);
      throw error;
    }
  }
}

module.exports = PermissaoService;