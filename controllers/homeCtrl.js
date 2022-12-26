const homeCtrl = {
    homePage: async (req, res) => {
       res.render('index')
    },
    slotPG: async (req, res) => {
       res.render('slotpg')
    },
    slotAMB: async (req, res) => {
       res.render('slotamb')
    },
    slotUFA: async (req, res) => {
       res.render('slotufa')
    },
    slotUPSX: async (req, res) => {
       res.render('slotupsx')
    },
    slotWabetfilx: async (req, res) => {
       res.render('slotwabetfilx')
    },
    slotWallet: async (req, res) => {
       res.render('slotwallet')
    },
    slotXO: async (req, res) => {
       res.render('slotxo')
    },

}    

module.exports = homeCtrl
