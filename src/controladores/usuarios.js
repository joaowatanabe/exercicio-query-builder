const express = require("express");

const knex = require("../conexao/conexao");

const listar = async (req, res) => {
  try {
    const usuarios = await knex("usuarios");
    return res.status(200).json(usuarios);
  } catch (error) {
    return res.status(400).json(error.message);
  }
};

const listarPorId = async (req, res) => {
  const { id } = req.params;
  try {
    const usuario = await knex("usuarios").where("id", id);

    if (!usuario) {
      return res.status(404).json({ message: "Usuário não encontrado!" });
    }

    return res.status(200).json(usuario);
  } catch (error) {
    return res.status(400).json(error.message);
  }
};

const atualiarUsuario = async (req, res) => {
  try {
    
  } catch (error) {
    return res.status(400).json(error.message);
  }
};

const deletarUsuario = async (req, res) => {
  try {
  } catch (error) {
    return res.status(400).json(error.message);
  }
};

module.exports = {
  listar,
  listarPorId,
  atualiarUsuario,
  deletarUsuario,
};
