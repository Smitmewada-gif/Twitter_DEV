const express = require("express");
const app = express();
const connect = require('./config/database');
const Tweet = require('./models/tweet');

app.listen(4000, async ()=>{
  console.log("Server started on port: ", 4000);
  await connect();
  console.log("database connected");

  const tweet = await Tweet.create({
    content: 'First tweet',
    userEmail: 'smit@gmail.com'
  });
  console.log("new tweet created is: ", tweet);
});