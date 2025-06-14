const {LikeRepository, TweetRepository} = require('../repository/index');

class LikeService{
  constructor(){
    this.likeRepository = new LikeRepository();
    this.tweetRepository = new TweetRepository();
  }

  async toggleLike(modelId, modelType, userId){
    try {
      if(modelType == 'Tweet'){
        var likable = await this.tweetRepository.find(modelId);


      }
      else if (modelType == 'Comment'){

      }
      else {
        throw new Error('unknow model type');
      }

      const exists = await this.likeRepository.findByUserAndLikable({
        user: userId,
        onModel: modelType,
        likeable: modelId
      });

      if(exists){
          likable.likes.pull(exists.id);
          await likable.save();
          await this.likeRepository.destroy(exists.id);
          var isAdded = false;
      }else{
          const newLike = await this.likeRepository.create({
            user: userId, 
            onModel: modelType,
            likeable: modelId
          });

          likable.likes.push(newLike);
          await likable.save();
          var isAdded = true;
      }
      return isAdded;
    } catch (error) {
      console.log("error", error);
    }
  }
}

module.exports = LikeService;