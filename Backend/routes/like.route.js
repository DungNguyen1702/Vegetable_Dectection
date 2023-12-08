const express = require('express');
const LikeApiControllers = require('../controllers/api/like.controller')
const router = express.Router();

router.get('/like_fruit/:id', LikeApiControllers.showLikeFruit)

router.get('/like_dishes_by_user_id/:id', LikeApiControllers.showLikeDishByUserID)

router.get('/like_dish/', LikeApiControllers.showLikeDish)

router.put('/create_like_fruit/', LikeApiControllers.addLikeFruit)

router.put('/create_like_dish/', LikeApiControllers.addLikeDish)

router.delete('/delete_like_fruit/', LikeApiControllers.removeLikeFruit)

router.delete('/delete_like_dish/', LikeApiControllers.removeLikeDish)

module.exports = router