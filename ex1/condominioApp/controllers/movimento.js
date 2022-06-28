const Movimento = require('../models/movimento');

module.exports.list_all = () => {
    return Movimento
        .find({},{_id : 0})
        .sort({data : 1})
        .exec();
}

module.exports.insert = (data) => {
    var new_movimento = new Movimento(data);
    return new_movimento.save();
}