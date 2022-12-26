const router = require('express').Router()
const promotionCtrl = require('../controllers/promotionCtrl')

router.get('/', promotionCtrl.promotion)

router.get('/newmember', promotionCtrl.newMember)

router.get('/moneytoday', promotionCtrl.moneyToday)

router.get('/refun', promotionCtrl.reFun)

router.get('/craditfree', promotionCtrl.craditFree)

module.exports = router