const router = require('express').Router()
const articleCtrl = require('../controllers/articleCtrl')

router.get('/', articleCtrl.article)

module.exports = router