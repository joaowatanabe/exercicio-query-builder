const express = require('express')
const usuarios = require('./controladores/usuarios')

const rotas = express()

//Listar
rotas.get("/usuarios", async (req, res) => {});

//Listar usuario
rotas.get("/usuarios/:id", async (req, res) => {});

//Criar
rotas.post("/usuarios/", async (req, res) => {})

//Atualizar tudo
rotas.put("/usuarios/:id", async (req, res) => {});

//Deletar 
rotas.delete("/usuarios/:id", async (req, res) => {});

module.exports = rotas