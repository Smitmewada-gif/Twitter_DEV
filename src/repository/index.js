const LikeRepository = require('./like-repository');

module.exports = {
  TweetRepository: require('./tweet-repository'),
  HashTagRepository: require('./hastag-repository'),
  LikeRepository: require('./like-repository'),
  UserRepository: require('./user-repository')
}