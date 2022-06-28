const mongoose = require('mongoose');

const movimento_schema = new mongoose.Schema({
    numero: String,
    tipo: String,
    data: String,
    valor: Number,
    entidade: String,
    descricao: String,
},
{
    versionKey: false,
    collection: 'data'
});

module.exports = mongoose.model('movimentos', movimento_schema, 'movimentos');