var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");

router.get("/ultimas/:idUsuario", function (req, res) {
    medidaController.buscarValorNoDia(req, res);
});

router.get("/ultimasRosca/:idUsuario", function (req, res) {
    medidaController.buscarDadosRosca(req, res);
});

router.get("/gastoCategoria/:idUsuario/:categoria", function(req, res){
    medidaController.gastoCategoria(req, res);
});

router.get("/retornar3Linhas/:idUsuario", function(req, res){
    medidaController.retornar3Linhas(req, res);
});


module.exports = router;