const router = require('express').Router()
const categoryCtrl = require('../controllers/categoryCtrl')

router.get('/', categoryCtrl.categoryPage)

module.exports = router