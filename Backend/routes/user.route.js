const express = require('express');
const UserApiControllers = require('../controllers/api/user.controller')
const router = express.Router();
const multer = require('multer');

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.get('/', UserApiControllers.getUsers)

router.get('/user_by_id/:id', UserApiControllers.showById)

router.put('/update_avatar/', upload.single('image'), UserApiControllers.updateAvatar)

router.put('/update_info/', UserApiControllers.updateInfo)

router.put('/update_password/', UserApiControllers.updatePassword)

module.exports = router