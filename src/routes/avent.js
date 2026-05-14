var express = require("express");
var router = express.Router();

var aventController = require("../controllers/aventController");

router.get("/listar", function (req, res) {
    aventController.listar(req, res);
});

router.get("/listar/:idUsuario", function (req, res) {
    aventController.listarPorUsuario(req, res);
});

router.get("/pesquisar/:descricao", function (req, res) {
    aventController.pesquisarDescricao(req, res);
});

router.post("/publicar/:idUsuario", function (req, res) {
    aventController.publicar(req, res);
});

router.put("/editar/:idAviso", function (req, res) {
    aventController.editar(req, res);
});

router.delete("/deletar/:idAviso", function (req, res) {
    aventController.deletar(req, res);
});

module.exports = router;