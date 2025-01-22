const express = require("express");
const usuarios = require("../controladores/usuarios");

const rotas = express();

//Listar
rotas.get("/usuarios", usuarios.listar);

//Listar usuario
rotas.get("/usuarios/:id", usuarios.listarPorId);

//Criar
rotas.post("/usuarios/", usuarios.cadastrarUsuario);

//Atualizar tudo
rotas.put("/usuarios/:id", usuarios.atualiarUsuario);

//Deletar
rotas.delete("/usuarios/:id", usuarios.deletarUsuario);

module.exports = rotas;
