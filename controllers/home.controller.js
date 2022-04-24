const db = require('../model/models')

const getHome = async (req,res) =>{
    
    const user = await db.User.findAll({})
    const veterinaria = await db.Vet.findAll({})
    const servicios = await db.Service.findAll({})
    const amigos = await db.Friend.findAll({})
    const grupos = await db.Group.findAll({})
    const miembros = await db.Member.findAll({})
    const mascotas = await db.Pet.findAll({})
    const mensajes = await db.Message.findAll({})
    const conversaciones = await db.Conversation.findAll({})
    const publicaciones = await db.Post.findAll({})

    console.log(user,amigos,veterinaria,servicios,mensajes,mascotas,miembros,grupos,amigos,conversaciones,publicaciones)

    res.render('home')

}

module.exports = {
    getHome
}