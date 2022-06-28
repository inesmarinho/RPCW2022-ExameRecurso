const Pagamento = require('../models/pagamento');

module.exports.list_all = () => {
    return Pagamento
        .find({},{_id : 0})
        .exec();
}

module.exports.list_id = (id) => {
    return Pagamento
        .find({fracao : id},{_id : 0})
        .exec();
}