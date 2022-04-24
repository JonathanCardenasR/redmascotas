const db = require('../model/models')

const getChangePass = async (req,res) =>{
    res.render('change-pass')
}

const changePass = async (req,res) =>{
    
    const idUser = req.params.id
    const pass1 = req.body.password1
    const pass2 = req.body.password2

    if(pass1!=pass2){
        alert('contraseñas equivocadas')
        return res.render('change-pass')
    }

    var user

    try {
        user = db.User.findOne({
            where: idUser
        })
    } catch (error) {
        console.log(error)
        alert('No se encontro id de usuario')
        return res.render('change-pass')
    }

    user.password = pass1

    await user.save()
    return res.render('login')
}

module.exports = {
    changePass,
    getChangePass
}