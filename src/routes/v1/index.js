const express = require('express');
const router = express.Router();
const tweetController = require('../../controller/tweet-controller');
const {createComment} = require('../../controller/comment-controller');
const {toggleLike} = require('../../controller/like-controller');
const {signUp, signin} = require('../../controller/auth-controller');
const {authenticate} = require('../../middlewares/authenticate');

router.post('/tweets', authenticate, tweetController.create);
router.get('/tweets/:id', tweetController.getTweet);
router.post('/likes/toggle', toggleLike);
router.post('/comments', createComment);
router.post('/signup', signUp);
router.post('/signin', signin);

module.exports = router;