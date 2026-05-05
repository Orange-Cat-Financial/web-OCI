const database = require("../database/fotoConfig");

function salvar(usuario) {
  const instrucao = `update usuario set fotoPerfil = '${usuario.imagem}' where idUsuario = 1`;

  console.log("SQL:", instrucao);

  return database.executar(instrucao);
}

function buscarUsuarioPeloId(id) {
  const instrucao = `select * from usuario where id = ${id}`;

  return database.executar(instrucao [
    usuario.fotoPerfil,
    usuario.idUsuario
  ]);
}

module.exports = { salvar, buscarUsuarioPeloId }