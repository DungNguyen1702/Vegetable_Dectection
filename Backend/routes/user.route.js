const express = require('express');
const UserApiControllers = require('../controllers/api/user.controller')
const router = express.Router();
const multer = require('multer');

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.get('/', UserApiControllers.getUsers)

router.put('/change_avatar/', upload.single('image'), UserApiControllers.changeAvatar)

module.exports = router