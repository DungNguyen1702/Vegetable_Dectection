const express = require('express');
const HistoryApiControllers = require('../controllers/api/history.controller')
const router = express.Router();
const multer = require('multer');

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.get('/:id', HistoryApiControllers.getHistoryByUserId)

router.post('/create/', upload.single('image'), HistoryApiControllers.createNewHistory)

module.exports = router