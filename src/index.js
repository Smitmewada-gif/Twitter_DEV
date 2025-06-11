const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const connect = require('./config/database');
const TweetService = require('./services/tweet-service');
const tweetService = new TweetService();
const {HashTagRepository} = require('./repository/index');
const Tweet = require("./models/tweet");
const repo = new HashTagRepository();
const apiRoutes = require('./routes/index');

app.listen(4000, async ()=>{
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended: true}));
  app.use('/api', apiRoutes);
  console.log("Server started on port: ", 4000);
  await connect();
  console.log("database connected");
});