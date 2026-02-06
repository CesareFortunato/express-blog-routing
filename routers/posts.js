//variabile express
const express = require('express');

//variabile router
const router = express.Router();

// index 
router.get('/', function (req, res) {
    res.send('Lista delle pizze');
});

// show 
router.get('/:id', function (req, res) {
    res.send('Dettagli della pizza ' + req.params.id);
});

// store
router.post('/', function (req, res) {
    res.send('Creazione nuova pizza');
});

module.exports = router;