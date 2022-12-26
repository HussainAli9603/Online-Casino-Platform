const router = require('express').Router()
const homeCtrl = require('../controllers/homeCtrl')

router.get('/', homeCtrl.homePage)

router.get('/slotpg', homeCtrl.slotPG)

router.get('/slotamb', homeCtrl.slotAMB)

router.get('/slotufa', homeCtrl.slotUFA)

router.get('/slotupsx', homeCtrl.slotUPSX)

router.get('/slotwabetfilx', homeCtrl.slotWabetfilx)

router.get('/slotwallet', homeCtrl.slotWallet)

router.get('/slotxo', homeCtrl.slotXO)

module.exports = router