const {TweetService} = require('../services/index');
const tweetService = new TweetService();
const create = async(req, res) =>{
  try {
    const tweet = await tweetService.create(req.body);
    return res.status(201).json({
      data: tweet,
      success: true,
      message: "Successfully created tweet",
      error: {}
    })
  } catch (error) {
      return res.status(500).json({
        data: {},
        success: false,
        message: "Unable to creat tweet",
        error: errpr
      })
  }
}

module.exports = {create};