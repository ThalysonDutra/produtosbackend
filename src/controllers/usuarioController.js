const mongoose = require('mongoose');
const usuario = mongoose.model('usuario');

module.exports = {
    async criarUsuario(req,res){
        const {email,senha,nome,cargo} = req.body;
        const response = await usuario.create({
            email,
            senha,
            nome,
            cargo
        });
        res.json(response);
    },
    async autenticaUsuario(req,res){
        const {email,senha} = req.body;
        const usuarioBD = await usuario.findOne({email,senha});
        res.json(usuarioBD);
    }
}