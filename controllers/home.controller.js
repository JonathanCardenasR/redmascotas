const db = require('../model/models')

const getHome = async (req,res) =>{
     
    res.render('home')
}

module.exports = {
    getHome
}