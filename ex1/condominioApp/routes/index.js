const express = require('express');
const router = express.Router();
const Movimento = require('../controllers/movimento');
const Pagamento = require('../controllers/pagamento');
var ObjectID = require('mongodb').ObjectID;

// GET /api/movimentos - Devolve a lista de movimentos, com todos os campos;
router.get('/api/movimentos', (req, res, next) => {
    Movimento.list_all()
        .then(data => {
            res.json(data);
        })
        .catch(err => { 
            console.log(err);
        });
});

// GET /api/pagamentos - Devolve a lista de pagamentos;
router.get('/api/pagamentos', (req, res, next) => {
    
    Pagamento.list_all()
        .then(data => {
            res.json(data);
        })
        .catch(err => { 
            console.log(err);
        });
});

// GET /api/pagamentos/:id - Devolve a lista de pagamentos da fração id, indicando os meses pagos, o total pago e o total em dívida;
router.get('/api/pagamentos/:id', (req, res, next) => {
    Pagamento.list_id(req.params.id)
        .then(data => {
            res.json(data);
        })
        .catch(err => { 
            console.log(err);
        });
});

// POST /api/movimentos - Acrescenta um novo movimento;
router.post('/api/movimentos', (req, res, next) => {
    if(req.body != null)
    {
        if(req.body.numero != null
            && req.body.tipo != null
            && req.body.data != null
            && req.body.valor != null
            && req.body.entidade != null
            && req.body.descricao != null)
        {
            let new_movimento = {
                "_id": new ObjectID(),
                "numero": req.body.numero,
                "tipo": req.body.tipo,
                "data": req.body.data,
                "valor": Number(req.body.valor),
                "entidade": req.body.entidade,
                "descricao": req.body.descricao,
            };
            Movimento.insert(new_movimento)
            .then(_ => {
                res.jsonp({"status": "success"});
            })
            .catch(err => { 
                res.jsonp(500, {"error": "Failed to insert movimento"});
                console.log(err);
            });
        }
    }
    else {
        res.json(400, {
            "error": "bad request",
        });
    }
});

// POST pagamento
router.post('api/pagamentos', (req, res, next) => {
    res.jsonp({})
});

module.exports = router;
