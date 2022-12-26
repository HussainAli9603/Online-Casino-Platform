const promotionCtrl = {
    promotion: async (req, res) => {
       res.render('promotion/index')
    },
    newMember: async (req, res) => {
       res.render('promotion/newmember')
    },
    moneyToday: async (req, res) => {
       res.render('promotion/moneytoday')
    },
    reFun: async (req, res) => {
       res.render('promotion/refun')
    },
    craditFree: async (req, res) => {
       res.render('promotion/craditfree')
    },
}    

module.exports = promotionCtrl
