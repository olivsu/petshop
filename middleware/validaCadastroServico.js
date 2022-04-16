const validaCadastro = (req, res, next) => {
    const dadosCadastro = req.body
    if(dadosCadastro.nome== ''){
        res.send('Esqueceu o campo nome')
    }
    
    next()
}
module.exports = validaCadastro