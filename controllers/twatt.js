const OAuth = require('oauth');
var oauth = new OAuth.OAuth(
    'https://api.twitter.com/oauth/request_token',
    'https://api.twitter.com/oauth/access_token',
    process.env.ConsKey,
    process.env.ConsSecret,
    '1.0A',
    null,
    'HMAC-SHA1'
)
 
module.exports = {

    getTimeline(req, res){
        oauth.get(
            'https://api.twitter.com/1.1/statuses/home_timeline.json',
            process.env.Token, 
            process.env.TokenSecret,            
            function (e, data, r){
                res.status(200).send(data)
            }
        )
    },
    postTweet(req, res){
        oauth.post(
            'https://api.twitter.com/1.1/statuses/update.json?status='+req.body.tweet,
            process.env.Token, 
            process.env.TokenSecret, 
            req.body.tweet,
            'twatter',
            function (e, data, r){
                res.status(200).send(data)
            }
        )
    },
    search(req, res){
        oauth.get(
            'https://api.twitter.com/1.1/search/tweets.json?q='+req.query.tweet,
            process.env.Token, 
            process.env.TokenSecret,  
            function (e, data, r){
                res.status(200).send(data)
            }
        )
    }
}