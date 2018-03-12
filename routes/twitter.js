const express = require('express');
const Twit = require('twit');
const config = require('../twitter_config');
const router = express.Router();
// const stream = require('express-stream');
const TwitAPI = new Twit(config);

// Search for Tweets
router.get('/tweets', (request, response) => {
  TwitAPI.get('search/tweets', {
    q: request.query.q,
    count: request.query.count
  }, (error, data) => {
    if (error) {
      response.status(500).json(error);
    } else {
      response.status(200).json(data.statuses);
    }
  });
});

// Get user followers
router.get('/followers/:handle', (request, response) => {
  TwitAPI.get('followers/list', {
    screen_name: request.params.handle,
    count: request.query.count    
  }, (error, data) => {
    if (error) {
      response.status(500).json(error)
    } else {
      response.status(200).json(data.users);
    }
  });
});

// Get user
router.get('/user/:handle', (request, response) => {
  TwitAPI.get('users/show', {
    screen_name: request.params.handle
  }, (error, data) => {
    response.status(200).json(data);
  });
});

router.get('/user/tweets/:handle', (request, response)=>{
  TwitAPI.get('statuses/user_timeline',{screen_name: request.params.handle, count: 200}, (error,data) =>{
    response.status(200).json(data);
  });
});

// Get user following
router.get('/following/:handle', (request, response) => {
  TwitAPI.get('friends/list', {
    screen_name: request.params.handle,
    count: request.query.count
  }, (error, data) => {
    if (error) {
      response.status(500).json(error);
    } else {
      response.status(200).json(data.users);
    }
  });
});

// Get user tweets
router.get('/statuses/:handle', (request, response) => {
  TwitAPI.get('statuses/user_timeline', {
    screen_name: request.params.handle,
    count: request.query.count
  }, (error, data) => {
    if (error) {
      response.status(500).json(error);
    } else {
      response.status(200).json(data);
      1
    }
  });
});

// Post a tweet
router.post('/tweet/', (request, response) => {
    TwitAPI.post('statuses/update', {
      status: request.params.status
    }, (error, data) => {
      if (error) {
        response.status(500).json(error);
      } else {
        response.status(200).json(data);
        1
      }
    });
  });

module.exports = router;
