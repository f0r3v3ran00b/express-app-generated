var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.render('vices', {
        vices: ['Wine', 'Women', 'Song']
    });
});

router.get('/notpug', function (req, res, next) {
    res.writeHead(200, {
        'Content-Type': 'text/html'
    });
    res.write('<h1>Pug, not Pug !</h1>');
    res.end();
});


module.exports = router;