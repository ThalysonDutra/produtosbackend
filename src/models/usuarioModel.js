const mongoose = require('mongoose');

const usuarioSchema = mongoose.Schema({
    email: String,
    senha: {
        type: String,
        require: true,
    },
    nome: String,
    cargo: String
},{timestamps : true});

mongoose.model('usuario', usuarioSchema);