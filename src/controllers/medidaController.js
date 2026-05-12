var medidaModel = require("../models/medidaModel");

function buscarValorNoDia(req, res) {

    const limite_linhas = 7;

    var idUsuario = req.params.idUsuario;

    console.log(`Recuperando as ultimas ${limite_linhas} transações`);

    medidaModel.buscarValorNoDia(idUsuario, limite_linhas).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function buscarDadosRosca(req, res) {

    var idUsuario = req.params.idUsuario;

    console.log(`Recuperando`);

    medidaModel.buscarValorNoDiaRosca(idUsuario).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function gastoCategoria(req, res){

    let idUsuario = req.params.idUsuario;
    let categoria = req.params.categoria;

    medidaModel.gastoCategoria(idUsuario, categoria)
    .then(function(resultado){

        res.status(200).json(resultado);

    }).catch(function(erro){

        res.status(500).json(erro.sqlMessage);

    });

}


function retornar3Linhas(req, res){

    console.log("ID USUARIO BACK:", req.params.idUsuario);

    let idUsuario = req.params.idUsuario;


    medidaModel.retornar3Linhas(idUsuario)
    .then(function(resultado){

        res.status(200).json(resultado);

    }).catch(function(erro){

        res.status(500).json(erro.sqlMessage);

    });

}


module.exports = {
    buscarValorNoDia,
    buscarDadosRosca,
    gastoCategoria,
    retornar3Linhas
}