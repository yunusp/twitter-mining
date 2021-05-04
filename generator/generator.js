const Twit = require("twit");
const fs = require("fs")
const T = new Twit({
    consumer_key : process.env.C_KEY,
    consumer_secret : process.env.C_SECRET,
    access_token: process.env.ACC_T,
    access_token_secret: process.env.ACC_SECRET
});

const stream = T.stream('statuses/filter',{track: '#covid19', lang : 'en'});

stream.on('tweet',(tweet)=>{
    if(tweet.extended_tweet)
        fs.appendFileSync('data.txt',tweet.extended_tweet.full_text,'utf8',(err)=>console.log(err));
        else
        fs.appendFileSync('data.txt',tweet.text,'utf8',(err)=>console.log(err));
});