const {CommentService} = require('../services/index');
const commentService = new CommentService();

const createComment = async(req, res) =>{
  try {
    console.log(req)
    const result = await commentService.createComment(
      req.query.modelId,
      req.query.modelType,
      req.user.id,
      req.body.content 
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

module.exports = {createComment};