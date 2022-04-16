var express = require('express');
var router = express.Router();
const multer = require('multer')
const servicoController = require("../controller/servicoController")
const validaCadastro = require('../middleware/validaCadastroServico')
//biblioteca multer
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './fotoServico')
    },
    filename: function(req, file, cb){
        // Extenção da extensão do arquivo original
        //const extensãoArquivo = file.originalmente.split('.')[1];
        cb(null, `${Date.now()}-${file.originalname}`)
        //cria um código randômico que será o nome do arquivo
        //const novoNomeArquivo = require('crypto')
        //.randomBytes(64)
        //.toString('hex');
        //indica o nov nome do arquivo:
        //cb(null, file.originalname)//'${novoNomeArquivo}.${extensaoArquivo}')
    }
});

const upload = multer({ storage});
router.get('/',servicoController.index)
router.get('/cadastroget',servicoController.criarServicoGet)
router.post('/cadastroservico', upload.single('foto'),servicoController.criarServico)
router.get('/servico',servicoController.listaServicos)
router.get('/servicoid/:id', servicoController.testeparams)
router.get('/cadastroServico', servicoController.cadastroServico)
module.exports = router