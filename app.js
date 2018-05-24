// import { registerInterceptor } from 'mobx/lib/types/intercept-utils';

const express = require('express');
var router = express.Router();
const app = express();
const bodyParser = require('body-parser');


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))




const models = require('../models');

const events = models.events.build({
    title: "titles",
    password: "whateverstuff",
    userid: 4
})

app.post('/entryDetails', function(req, res, next) {
  models.events.create({
      title: req.body.title,
      entryDetail: req.body.entry_detail,
     day: req.body.day 
  });
});

app.get('/entryDetails', (req, res)=>{
  models.events.findAll({
    order: [
      ['id']
    ]
  }).then((userEntry)=>{
    res.json({userEntry:userEntry})
  })
})


// save the post
events.save().then(function(newPost){
  console.log(newPost)
}) 

models.sequelize.sync().then(()=>{
  app.listen(3002, function(){
    console.log('listening on 3002')
})  
})