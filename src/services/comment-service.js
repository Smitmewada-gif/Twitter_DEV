const {CommentRepository, TweetRepository} = require('../repository/index');
class CommentService {
  constructor(){
    this.commentRepository = new CommentRepository();
    this.tweetRepository = new TweetRepository();
  }

  async createComment(modelId, modelType, userId, content){
    try {
      if(modelType == 'Tweet'){
        var commentable = await this.tweetRepository.get(modelId);
      }
      else if (modelType == 'Comment'){
        var commentable = await this.commentRepository.get(modelId);
      }
      else {
        throw new Error('unknow model type');
      }

      const comment = await this.commentRepository.create({
        content: content,
        userId: userId,
        onModel: modelType,
        commentable: modelId,
        comments: []
      });

      commentable.comments.push(comment);
      await commentable.save();
      return comment;
    } catch (error) {
        console.log(error);
        throw error;
    }
  }
}

module.exports = CommentService;