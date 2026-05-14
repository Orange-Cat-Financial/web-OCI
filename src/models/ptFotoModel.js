const database = require("../database/fotoConfig");

function salvar(usuario) {
  const instrucao = `update usuario set fotoPerfil = '${usuario.imagem}' where idUsuario = ${usuario.id};`;


  return database.executar(instrucao);
}

function adicionarAventura(aventura) {
  const instrucao = `insert into aventuras (titulo, descricao, imagem, dtPost, locali, fkUsuario) values
('${aventura.titulo}', '${aventura.descricao}', '${aventura.foto}', '${aventura.dtPost}', '${aventura.locali}', ${aventura.fkUsuario});`;

  console.log("SQL:", instrucao); 

  return database.executar(instrucao);
}





module.exports = { salvar, adicionarAventura }