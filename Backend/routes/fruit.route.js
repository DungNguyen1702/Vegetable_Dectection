const express = require('express');
const FruitApiControllers = require('../controllers/api/fruit.controller');
const multer = require('multer');
const router = express.Router();

router.get('/', FruitApiControllers.getFruits)

router.get('/:id', FruitApiControllers.getFruitById)

const storage = multer.memoryStorage(); // Sử dụng memory storage để không lưu trữ tệp tin

const upload = multer({ storage: storage });

router.post('/predict_fruit', upload.single('image'), FruitApiControllers.predictFruit)

module.exports = router