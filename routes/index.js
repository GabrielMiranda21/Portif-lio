var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('paginaInicial', { title: 'Gabriel Miranda' });
});

router.get('/projetos', function(req, res, next) {
  res.render('projetos', { title: 'Projetos' });
});

/*router.get('/', function(req, res, next) {
  res.render('sobreMim', { title: 'Sobre Mim' });
});*/

router.get('/contato', function(req, res, next) {
  res.render('contato', { title: 'Contato' });
});

router.get('/sobreMim', function(req, res, next) {
  res.render('sobreMim', { title: 'Sobre Mim' });
});


module.exports = router;
