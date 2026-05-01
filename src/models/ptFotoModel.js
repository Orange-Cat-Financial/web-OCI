const database = require("../database/fotoConfig");

function salvar(usuario) {
  const instrucao = `insert into imagem (imagem_perfil) values ('${usuario.imagem}')`;

  return database.executar(instrucao);
}

function buscarUsuarioPeloId(id) {
  const instrucao = `select * from imagem where id = ${id}`;

  return database.executar(instrucao);
}

module.exports = { salvar, buscarUsuarioPeloId }