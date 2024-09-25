const express = require('express')
const router = express.Router()
const {
    getAllUsers,
    getOneUser,
    updateOneUser,
    deleteOneUser,
    createOneUser
} = require('../controllers/userControllers.js')

router.get('/', getAllUsers).get('/:id', getOneUser).put('/:id', updateOneUser).delete('/:id', deleteOneUser)
router.post('/', createOneUser)

module.exports = router;