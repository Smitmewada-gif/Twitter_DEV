const mongoose = require('mongoose');

const tweetSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
    
    max: [250, 'Tweet cannot be more than 250 characters']
  },
  likes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Like'
    }
  ],
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Comment'
    }
  ],
  image: {
      type: String
  }
  
},{timestamps: true});

tweetSchema.virtual('contentWithEmail').get(function process() {
  return `${this.content} \nCreated by: ${this.userEmail}`;
});

tweetSchema.pre('save', function(next) {
  this.content = this.content + '.....';
  next();
});

const Tweet = mongoose.model('Tweet', tweetSchema);
module.exports = Tweet;
