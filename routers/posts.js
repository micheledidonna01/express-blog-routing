const express = require('express');
const router = express.Router();
const posts = require('../data/posts.js');
//index
router.get('/', (req, res) => {
    res.json(posts);
});

//show
router.get('/:slug', (req, res) => {
    res.json(posts.find((post)=>{
        return post['slug'] == req.params.slug;
    })

);
});

//store
router.post('/', (req, res) => {
    res.send('Creazione di un nuovo dolce');
});

//update
router.put('/:slug', (req, res) => {
    res.send('Modifica integrale del dolce ' + req.params.slug);
});

//modify
router.patch('/:slug', (req, res) => {
    res.send('Modifica del dolce ' + req.params.slug);
});

//destroy
router.delete('/:slug', (req, res) => {
    res.send('Eliminazione del dolce ' + req.params.slug);
});

module.exports = router;