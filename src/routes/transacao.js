var express = require("express");
var router = express.Router();

var transacaoController = require("../controllers/transacaoController");

router.get("/listar", function (req, res) {
    transacaoController.listar(req, res);
});

router.get("/listar/:idUsuario/:tipo", function (req, res) {
    transacaoController.listarPorUsuario(req, res);
});

router.get("/dinheiroTt/:idUsuario", function (req, res) {
    transacaoController.listarDinheiroTotalPorUsuario(req, res);
}); 

router.get("/pesquisar/:descricao", function (req, res) {
    transacaoController.pesquisarDescricao(req, res);
});

router.post("/publicar/:idUsuario", function (req, res) {
    transacaoController.publicar(req, res);
});

router.put("/editar/:idAviso", function (req, res) {
    transacaoController.editar(req, res);
});

router.delete("/deletar/:idAviso", function (req, res) {
    transacaoController.deletar(req, res);
});

module.exports = router;