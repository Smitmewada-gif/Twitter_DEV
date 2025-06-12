const mongoose = require('mongoose');

const likeSchema = new mongoose.Schema({
  onModel:{
    type: String,
    required: true,
    enum: ['Tweet', 'Comment']
  },
  likeable: {
    type: mongoose.Schema.Typses.ObjectId, 
    required: true,
    refPath: 'onModel'  // dynamic reference 
  },
  user:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {timestamps: true});

const Like = mongoose.model('Like', likeSchema);

module.exports = Like;