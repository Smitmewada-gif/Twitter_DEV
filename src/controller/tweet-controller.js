const {TweetService} = require('../services/index');
const tweetService = new TweetService();
const upload = require('../config/file-upload-s3-config');
const singleUploader = upload.single('image');

const create = async(req, res) =>{
  try {

    singleUploader(req, res, async function(err, data){
      if(err){
        res.status(500).json({
          error: err
        })
      }
      console.log('Image url is', req.file);
      const payload = {...req.body};
      payload.image = req.file.location;

      const tweet = await tweetService.create(payload);
      return res.status(201).json({
        data: tweet,
        success: true,
        message: "Successfully created tweet",
        error: {}
      });
    });
    
  } catch (error) {
      return res.status(500).json({
        data: {},
        success: false,
        message: "Unable to creat tweet",
        error: error
      })
  }
}

const getTweet = async(req, res) =>{
  try {
    const tweet = await tweetService.get(req.params.id);
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
        error: error
      })
  }
}

module.exports = {create, getTweet};