const express = require("express");
const app = express();
const connect = require('./config/database');
const TweetService = require('./services/tweet-service');
const tweetService = new TweetService();
const {HashTagRepository} = require('./repository/index');
const Tweet = require("./models/tweet");
const repo = new HashTagRepository();

app.listen(4000, async ()=>{
  console.log("Server started on port: ", 4000);
  await connect();
  console.log("database connected");
});