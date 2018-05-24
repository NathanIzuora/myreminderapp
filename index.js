const express = require('express');
const bodyParser = require('body-parser');

const app = express();



const models = require("../models")

app.get('/posts', function(req,res){
  models.post.findAll({
    
  })
})