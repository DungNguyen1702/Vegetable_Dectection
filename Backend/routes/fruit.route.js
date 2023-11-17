const express = require('express');
const FruitApiControllers = require('../controllers/api/fruit.controller')
const router = express.Router();

router.get('/', FruitApiControllers.getFruits)

// router.post('/',ProductApiControllers.createNewProduct)

// router.patch('/:id', ProductApiControllers.updateById)

// router.delete('/:id', ProductApiControllers.softDeleteById)

module.exports = router