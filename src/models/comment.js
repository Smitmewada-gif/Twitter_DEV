const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true
  },
  userId:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  onModel:{
    type: String,
    required: true,
    enum: ['Tweet', 'Comment']
  },
  commentable: {
    type: mongoose.Schema.Types.ObjectId, 
    required: true,
    refPath: 'onModel'  // dynamic reference 
  },
  comments: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment'
      }
    ]
}, {timestamps: true});

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment