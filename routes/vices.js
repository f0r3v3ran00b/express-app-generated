var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.set({
        'Content-Type': 'text/html; charset=utf-8'
    });

    res.render('vices', {
        vices: ['Wine', 'Women', 'Song']
    });
});

router.get('/notpug', function (req, res, next) {
    res.writeHead(200, {
        'Content-Type': 'application/json'
    });
    res.write('<h1>Pug, not Pug !</h1>');
    res.end();
});


module.exports = router;