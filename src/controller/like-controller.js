const {LikeService} = require('../services/index');
const likeService = new LikeService();

const toggleLike = async(req, res) =>{
  try {
    console.log(req.params)
    const result = await likeService.toggleLike(
      req.query.modelId,
      req.query.modelType,
      req.body.userId
    );
    
    res.status(200).json({
      data: result,
      success: true,
      error: {},
      message: "Operation successfull"
    })
  } catch (error) {
    res.status(500).json({
      data: {},
      success: false,
      error: error,
      message: "Something went wrong"
    })
  }
}

module.exports = {toggleLike};