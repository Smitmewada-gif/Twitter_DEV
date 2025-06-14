const express = require('express');
const router = express.Router();
const tweetController = require('../../controller/tweet-controller');
const {toggleLike} = require('../../controller/like-controller');


router.post('/tweets', tweetController.create);
router.post('/likes/toggle', toggleLike);

module.exports = router;