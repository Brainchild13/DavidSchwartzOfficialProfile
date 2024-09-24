const express = require('express')
const router = express.Router()
const User = require('../models/userModel.js')

router.get('/', async (req, res) => {
    try {
        const users = await User.find()
        console.log('All User')
        res.send('All Users')
    } catch (error) {
        console.log(error)
    }

})

router.get('/:id', (req, res) => {
    console.log('1 User')
    res.send('One User')
})

router.put('/:id', (req, res) => {
    console.log('updated one user')
    res.send('updated one user')
})

router.delete('/:id', (req, res) => {
    console.log('deleted one user')
    res.send('deleted one user')
})

router.post('/', (req, res) => {
    console.log('created one user')
    res.send('created one user')
})

module.exports = router;