const db = require('../model/models')

const getPrincipal = async (req,res) =>{
    

    res.render('home')

}

module.exports = {
    getPrincipal
}