const db = require('../model/models')

const changePass = async (req,res) =>{
    
    res.render('login')
}

module.exports = {
    changePass
}