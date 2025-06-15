const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const connect = require('./config/database');
const apiRoutes = require('./routes/index');
const passport = require('passport');
const {passportAuth} = require('./config/jwt-middleware');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(passport.initialize());
passportAuth(passport);

app.use('/api', apiRoutes);

app.listen(4000, async ()=>{

  console.log("Server started on port: ", 4000);
  await connect();
  console.log("database connected");
});