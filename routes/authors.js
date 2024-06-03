const express = require('express')
const router = express.Router()

//All authors 
router.get('/',(req, res) => {
    res.render('authors/index')
})

//New author routes
router.get('/new',(req, res) => {
    res.render('authors/new')
})


// Crete Author route
router.post('/',(req, res) => {
    res.send('Create')
})

module.exports = router