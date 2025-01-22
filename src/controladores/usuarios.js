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
    const usuario = await knex("usuarios").where({ id }).first();

    if (!usuario) {
      return res.status(404).json({ message: "Usuário não encontrado!" });
    }

    return res.status(200).json(usuario);
  } catch (error) {
    return res.status(400).json(error.message);
  }
};

const cadastrarUsuario = async (req, res) => {
  const { nome, email, senha } = req.body;

  if (!nome || !email || !senha) {
    return res
      .status(404)
      .json({ message: "Todos os campos são obrigatórios" });
  }

  try {
    const usuario = await knex("usuarios")
      .insert({ nome, email, senha })
      .returning("*");

    if (usuario.length === 0) {
      return res.status(400).json("Não foi possível atualizar o usuário");
    }

    return res.status(201).json(usuario[0]);
  } catch (error) {
    return res.status(400).json(error.message);
  }
};

const atualiarUsuario = async (req, res) => {
  const { nome, email, senha } = req.body;
  const { id } = req.params;

  if (!nome || !email || !senha) {
    return res
      .status(404)
      .json({ message: "Todos os campos são obrigatórios" });
  }

  try {
    const usuarioExiste = await knex("usuarios").where({ id }).first();

    if (!usuarioExiste) {
      return res.status(404).json("Usuário não existe");
    }

    const usuario = await knex("usuarios")
      .update({ nome, email, senha })
      .where({ id });

    if (!usuario) {
      return res.status(404).json("Não foi possível atualizar o usuário");
    }

    return res.status(200).json("Usuário atualizado com sucesso");
  } catch (error) {
    return res.status(400).json(error.message);
  }
};

const deletarUsuario = async (req, res) => {
  const { id } = req.params;

  try {
    const usuarioExiste = await knex("usuarios").where({ id }).first();

    if (!usuarioExiste) {
      return res.status(404).json("Usuário não existe");
    }

    const usuario = await knex("usuarios").where({ id }).del();

    if (!usuario) {
      return res.status(404).json("Não foi possível deletar o usuário");
    }

    return res.status(200).json("Usuário deletado com sucesso");
  } catch (error) {
    return res.status(400).json(error.message);
  }
};

module.exports = {
  listar,
  listarPorId,
  cadastrarUsuario,
  atualiarUsuario,
  deletarUsuario,
};
