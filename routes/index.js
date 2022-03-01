var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'aula 03/02' });
});
router.get('//servico', function(req, res, next) {
  res.send(modelServico);
});

module.exports = router;
