const db = require('../model/models')

const getCreateVet = (req,res) =>{

    const idUser = req.params.id  
    res.render('create-vet',{userId : idUser})
    
}

const createVet = async (req,res) =>{
    
    const idUser = req.body.id
    const nombre = req.body.nombre
    const direccion = req.body.direccion
    const telefono = req.body.telefono

    await db.Vet.create({
        nombre:  nombre,
        direccion: direccion,
        telefono: telefono,
        vetUserId: idUser
    })

    return res.render('page-vet')
}

module.exports = {
    createVet,
    getCreateVet
}