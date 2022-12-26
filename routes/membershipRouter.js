const router = require('express').Router()
const membershipCtrl = require('../controllers/membershipCtrl')

router.get('/', membershipCtrl.getRegister)

module.exports = router;