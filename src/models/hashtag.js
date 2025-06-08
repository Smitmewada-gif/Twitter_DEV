const mongoose = require('mongoose');

const hashtagSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  tweets: [
    {
      type: mongoose.Schema.Types.ObjectId, // multiple tweet ids belongs to a hashtag 
      ref: 'Tweet'
    }
    
  ]
}, {timestamps: true})

const Hashtag = mongoose.model('Hashtag', hashtagSchema);
module.exports = Hashtag;