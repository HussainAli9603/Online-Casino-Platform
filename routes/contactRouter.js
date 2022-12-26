const router = require('express').Router()
const contactCtrl = require('../controllers/contactCtrl')

router.get('/', contactCtrl.contact)

module.exports = router