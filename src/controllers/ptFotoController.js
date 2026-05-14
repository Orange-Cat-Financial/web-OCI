const usuarioModel = require('../models/ptFotoModel');


function salvar(req, res) {
  const imagem = req.file.filename;
  const idUsuario = req.body.idUsuario;

  const {nome, email} = req.body

  const usuario = { 
    imagem: imagem,
    id: idUsuario 
  };
  
  usuarioModel.salvar(usuario)
  .then(resultado => {
    res.status(200).json({ arquivo: imagem });
  }).catch(err => {
    res.status(500).send(err);
  });
}

function adicionarAventura(req, res){
  console.log("FILE:", req.file);
console.log("BODY:", req.body);
 let foto = req.file.filename;
 let tt = req.body.titulo;
 let desc = req.body.descricao;
 let fk = req.body.fkUsuario;
 let dt = req.body.data;
 let locali = req.body.localizacao;

 const aventura = { 
        titulo: tt,
        descricao: desc,
        foto: foto,
        dtPost: dt,
        locali: locali,
        fkUsuario: fk,
      };
  
  usuarioModel.adicionarAventura(aventura)
  .then(resultado => {
    res.status(201).send("aventuramds criado com sucesso");
  }).catch(err => {
    res.status(500).send(err);
  });
}



module.exports = { salvar, adicionarAventura }