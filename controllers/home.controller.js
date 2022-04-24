const db = require('../model/models')

const getHome = async (req,res) =>{
    
    const grupos = await db.Group.findAll(
        {include: 'miembros' }
    ) 

    /*
    const user = await db.User.findAll({})
    const veterinaria = await db.Vet.findAll({include: 'services'})
    const servicios = await db.Service.findAll({})
    const amigos = await db.Friend.findAll({})
    const miembros = await db.Member.findAll({})
    const mascotas = await db.Pet.findAll({})
    const mensajes = await db.Message.findAll({})
    const conversaciones = await db.Conversation.findAll({})
    const publicaciones = await db.Post.findAll({})*/

    /*
    console.log(veterinaria[0])
    console.log(veterinaria[0].nombre)
    console.log(veterinaria[0].services[0].nombre) */

    res.render('home')

}

module.exports = {
    getHome
}