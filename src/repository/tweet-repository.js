const Tweet = require('../models/tweet');
const CrudRepository = require('./crud-repository');

class TweetRepository extends CrudRepository{
  constructor(){
    super(Tweet);
  }
  async create(data){
    try {
      const tweet = await Tweet.create(data);
      return tweet
    } catch (error) {
        throw error;
    }
  }

  async update(id, data){
    try {
      const tweet = await Tweet.findByIdAndUpdate(id, data);
      return tweet
    } catch (error) {
        throw error;
    }
  }

  async getWithComments(id){
    try {
      const tweet = await Tweet.findById(id).populate({path: 'comments'});
      return tweet;
    } catch (error) {
      console.log(error);
    }
  }

  async getAll(offset, limit){
    try {
      const tweets = await Tweet.find().skip(offset).limit(limit);
      return tweets;
    } catch (error) {
      console.log(error);
    }
  }

  async find(id){
    try {
      const tweet = await Tweet.findById(id).populate({path: 'likes'});
      return tweet;
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = TweetRepository;