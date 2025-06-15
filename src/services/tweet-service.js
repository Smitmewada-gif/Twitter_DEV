const {TweetRepository, HashTagRepository} = require('../repository/index');
class TweetService {
  constructor(){
    this.tweetRepository = new TweetRepository();
    this.hashTagRepository = new HashTagRepository();
  }

  async create(data){
    try {
      const content = data.content;
      let tags = content.match(/#[a-zA-Z0-9_]+/g); // this regex extracts hashtag
      tags = tags.map((tag) => tag.substring(1).toLowerCase());
      const tweet = await this.tweetRepository.create(data);
      let alreadyPresentTags = await this.hashTagRepository.findByName(tags);
      let titleOfPresentTags = alreadyPresentTags.map((tag)=> tag.title);
      
      let newTags = tags.filter((tag) => !titleOfPresentTags.includes(tag));

      newTags = newTags.map((newTag) => {
        return {title: newTag, tweets: [tweet.id]}
      });
      
      await this.hashTagRepository.bulkCreate(newTags);

      alreadyPresentTags.forEach((tag) =>{
        tag.tweets.push(tweet.id);
        tag.save();
      });
      
      return tweet;
    } catch (error) {
        console.log(error);  
    }
  }

  async get(id){
    try {
      const tweet = await this.tweetRepository.getWithComments(id);
      return tweet;
    } catch (error) {
        throw error;
    }
  }
}

module.exports = TweetService;