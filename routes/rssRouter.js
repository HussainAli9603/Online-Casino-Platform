const router = require('express').Router()
const rssCtrl = require('../controllers/rssCtrl')

router.get('/', rssCtrl.rssFeed)

module.exports = router