const db = require('../model/models')

const getChangePass = async (req,res) =>{

    const idUser = req.params.id

    res.render('change-pass',{userId : idUser})
}

const getChat = async (req,res) =>{

    res.render('chat')
}

const postChat = async (req,res) =>{



    res.redirect('/chat')
}

const getChatPrincipal = async (req,res) =>{

    res.render('chat-global')
}

const changePass = async (req,res) =>{
  
    const idUser = req.params.id
    const pass1 = req.body.password1
    const pass2 = req.body.password2
    
    
    console.log(pass1,pass2)

    if(pass1!=pass2){
        console.log('contraseñas equivocadas')
        return res.redirect('/user/change_pass/'+ idUser)
    }

    var user

    try {
        user = await db.User.findOne({
            where: {id :idUser}
        })
    } catch (error) {
        console.log(error)
        console.log('No se encontro id de usuario')
        return res.redirect('/user/change_pass/'+ idUser)
    }

    user.password = pass1

    await user.save()

    return res.redirect('/')
}

module.exports = {
    changePass,
    getChangePass,
    getChat,
    getChatPrincipal,
    postChat
}