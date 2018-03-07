const express = require('express');
const router = express.Router();
const {getTimeline, postTweet, search} = require('../controllers/twatt')

router.get('/', getTimeline)
router.post('/', postTweet)
router.get('/search', search)

module.exports = router;
