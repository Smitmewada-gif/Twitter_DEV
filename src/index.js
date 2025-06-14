const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const connect = require('./config/database');
const apiRoutes = require('./routes/index');
const LikeService = require("./services/like-service");
const { TweetRepository , UserRepository, LikeRepository} = require("./repository/index");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/api', apiRoutes);

app.listen(4000, async ()=>{

  console.log("Server started on port: ", 4000);
  await connect();
  console.log("database connected");


  const userRepo = new UserRepository();
  const tweetRepo = new TweetRepository();
  const tweets = await tweetRepo.getAll(0, 10);
  const users = await userRepo.getAll(0, 10);
  // const user = await userRepo.create({
  //   email: 'mewadasmit72@gmail.com',
  //   password: '1234',
  //   name: 'SMIT'
  // });

  const likeService = new LikeService();
  await likeService.toggleLike(tweets[0].id, 'Tweet', users[0].id);

});