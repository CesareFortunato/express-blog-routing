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

// create
router.post('/', function (req, res) {
    res.send('Creazione nuova pizza');
});

//update
router.put('/:id', function (req, res) {
    res.send('Modificare la pizza ' + req.params.id);
});


//destroy
router.delete('/:id', function (req, res) {
    res.send('Distruggere la pizza ' + req.params.id);
});


module.exports = router;