const db = require('../model/models')

const getChangePass = async (req,res) =>{

    const idUser = req.params.id

    res.render('change-pass',{userId : idUser})
}

const changePass = async (req,res) =>{

    console.log(pass1,pass2)
    
    const idUser = req.params.id
    const pass1 = req.params.password1
    const pass2 = req.params.password2

    console.log(pass1,pass2)

    if(pass1!=pass2){
        alert('contraseñas equivocadas')
        return res.redirect('user/change_pass' + idUser)
    }

    var user

    try {
        user = db.User.findOne({
            where: {id :idUser}
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