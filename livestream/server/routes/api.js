const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = require('../models/user');
const jwt = require('jsonwebtoken')
const db = "mongodb://testuser:testpw@ds123136.mlab.com:23136/eventsdb";
// mongoose.Promise = global.Promise;

mongoose.connect(db, function(err){
    if(err){
        console.error('Error! ' + err)
    } else {
      console.log('Connected to mongodb')      
    }
});

function verifyToken(req, res, next) {
  if(!req.headers.authorization) {
    return res.status(401).send('Unauthorized request')
  }
  let token = req.headers.authorization.split(' ')[1]
  if(token === 'null') {
    return res.status(401).send('Unauthorized request')    
  }
  let payload = jwt.verify(token, 'secretKey')
  if(!payload) {
    return res.status(401).send('Unauthorized request')    
  }
  req.userId = payload.subject
  next()
}

router.get('/events', (req,res) => {
  let events = [
    {
      "_id": "1",
      "name": "Jack",
      "videopath" : "assets/images/image1.png",
      "description": "Economics Admissions Assessment",
      "date": "2020-07-13T18:25:43.511Z"
    },
    {
      "_id": "2",
      "name": "Robert",
      "videopath" : "assets/images/image1.png",
      "description": "Engineering Admissions Assessment",
      "date": "2020-07-13T18:25:43.511Z"
    },
    {
      "_id": "3",
      "name": "John",
      "videopath" : "assets/images/image1.png",
      "description": "Cambridge Test of Mathematics",
      "date": "2020-07-13T18:25:43.511Z"
    },
    {
      "_id": "4",
      "name": "	James",
      "videopath" : "assets/images/image1.png",
      "description": "Economics Admissions Assessment",
      "date": "2020-07-13T18:25:43.511Z"
    },
    {
      "_id": "5",
      "name": "Leo",
      "videopath" : "assets/images/image1.png",
      "description": "Physics online assessment",
      "date": "2020-07-13T18:25:43.511Z"
    }
   
  ]
  res.json(events)
})

router.get('/special', verifyToken, (req, res) => {
  let specialEvents = [
    {
      "_id": "1",
      "name": "Jack",
      "description": "List of anomalies",
      "date": "2020-07-13T18:25:43.511Z"
    },
    {
      "_id": "2",
      "name": "Robert",
      "description": "List of anomalies",
      "date": "2020-07-13T18:25:43.511Z"
    },
    {
      "_id": "3",
      "name": "John",
      "description": "List of anomalies",
      "date": "2020-07-13T18:25:43.511Z"
    },
    {
      "_id": "4",
      "name": " James",
      "description": "List of anomalies",
      "date": "2020-07-13T18:25:43.511Z"
    },
    {
      "_id": "5",
      "name": "Leo",
      "description": "List of anomalies",
      "date": "2020-07-13T18:25:43.511Z"
    },
    {
      "_id": "6",
      "name": "Oliver",
      "description": "List of anomalies",
      "date": "2020-07-13T18:25:43.511Z"
    }
  ]
  res.json(specialEvents)
})

router.post('/register', (req, res) => {
  let userData = req.body
  let user = new User(userData)
  user.save((err, registeredUser) => {
    if (err) {
      console.log(err)      
    } else {
      let payload = {subject: registeredUser._id}
      let token = jwt.sign(payload, 'secretKey')
      res.status(200).send({token})
    }
  })
})

router.post('/login', (req, res) => {
  let userData = req.body
  User.findOne({email: userData.email}, (err, user) => {
    if (err) {
      console.log(err)    
    } else {
      if (!user) {
        res.status(401).send('Invalid Email')
      } else 
      if ( user.password !== userData.password) {
        res.status(401).send('Invalid Password')
      } else {
        let payload = {subject: user._id}
        let token = jwt.sign(payload, 'secretKey')
        res.status(200).send({token})
      }
    }
  })
})

module.exports = router;