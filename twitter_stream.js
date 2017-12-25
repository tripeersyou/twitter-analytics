const Twit = require('twit');
const config = require('./twitter_config');
const T = new Twit(config);

let stream = T.stream('statuses/filter', {track: ['Star Wars','Eggs']});

let tweets = [];

stream.on('tweet', tweet => {
    console.log(`${tweet.created_at}: ${tweet.text}`);
    tweets.push(tweet);
});