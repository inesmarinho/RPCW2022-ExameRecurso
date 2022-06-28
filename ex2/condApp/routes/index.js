var express = require('express');
var axios = require('axios');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    axios.get('http://localhost:3001/api/movimentos')
      .then(result => {
        var recebido = 0;
        var pago = 0;
        for (let i = 0; i < result.data.length; i++){
            if (result.data[i].tipo === "Receita"){
                recebido += result.data[i].valor
            }
            if (result.data[i].tipo === "Despesa"){
                pago += result.data[i].valor
            }
        }
        res.render('index', { title: 'Express' , total : {recebido:recebido, pago:pago}});
      })
      .catch(error => {
          res.render('error', { error: error })
      });
    
});

router.get('/movimentos', function(req, res, next) {
  axios.get('http://localhost:3001/api/movimentos')
      .then(result => {
          res.render('movimentos', { title: 'Express' , movimento: result.data});
      })
      .catch(error => {
          res.render('error', { error: error })
      });
  
});

router.get('/pagamentos', function(req, res, next) {
  axios.get('http://localhost:3001/api/pagamentos')
      .then(result => {
          res.render('pagamentos', { title: 'Express' , pagamento: result.data});
      })
      .catch(error => {
          res.render('error', { error: error })
      });
});

// post movimentos 
router.post('/movimentos', function(req, res, next) {
    axios.post('http://localhost:3001/api/movimentos', req.body)
        .then(result => {
            res.redirect('/');
        })
        .catch(error => {
            res.render('error', { error: error })
        });
    
  });

// post pagamentos
router.post('/pagamentos', function(req, res, next) {
    axios.post('http://localhost:3001/api/pagamentos', req.body)
        .then(result => {
            res.redirect('/');
        })
        .catch(error => {
            res.render('error', { error: error })
        });
  });

module.exports = router;
