const express = require('express');
const router = express.Router();
const {
    getAllCategories,
    getOneCategory,
    updateOneCategory,
    deleteOneCategory,
    createOneCategory
} = require('../controllers/categoryControllers.js');

router.get('/:id', getOneCategory).put('/:id', updateOneCategory).delete('/:id', deleteOneCategory)
router.get('/', getAllCategories).post('/', createOneCategory)


module.exports = router;