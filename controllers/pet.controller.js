const db = require('../model/models')

const getHome = async (req,res) =>{
    
    res.render('login')
}

module.exports = {
    getHome
}