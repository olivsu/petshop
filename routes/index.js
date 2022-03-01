var express = require('express');
var router = express.Router();
const petsController = require("../controller/petsController")

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'aula 03/02' });
});

//forma errada
//router.get('/servico', function(req, res, next) {
  //res.send(modelServico);
//});

//forma correta
router.get('/servico', petsController.listaServicos);
router.get('/pets', petsController.listaPets)

module.exports = router;
