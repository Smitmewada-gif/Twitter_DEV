const express = require('express');
const router = express.Router();
const tweetController = require('../../controller/tweet-controller');

router.post('/tweets', tweetController.create);

module.exports = router;