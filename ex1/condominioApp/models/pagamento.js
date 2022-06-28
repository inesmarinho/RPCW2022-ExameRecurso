const mongoose = require('mongoose');

const pagamento_schema = new mongoose.Schema({
    fracao: String,
    jan: Number,
    fev: Number,
    mar: Number,
    abr: Number,
    mai: Number,
    jun: Number,
    jul: Number,
    ago: Number,
    set: Number,
    out: Number,
    nov: Number,
    dez: Number,
},
{
    versionKey: false,
    collection: 'data'
});

module.exports = mongoose.model('pagamentos', pagamento_schema, 'pagamentos');