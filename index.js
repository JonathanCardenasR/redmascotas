var PORT = process.env.PORT || 8000

const res = require('express/lib/response')
const app = require('./app')
const db = require('./model/models')

app.set('views', __dirname + "/views")



//PaginaDeSesion
app.get('/Sesion',(req, res) =>{
    const textoRespuesta = "Sesion Iniciada"
    res.render('home')
})
app.get('/terminosycondiciones',(req, res) =>{
    const textoRespuesta = "Sesion Iniciada"
    res.render('term&cond')
})
app.get('/politicas',(req, res) =>{
    const textoRespuesta = "Sesion Iniciada"
    res.render('politicas')
})
app.get('/page',(req, res) =>{
    const textoRespuesta = "Sesion Iniciada"
    res.render('page-vet')
})


app.listen(PORT, ()=> {
    console.log(`El servidor se inicio correctamente en el puerto ${PORT}`)
})

// 
app.get('/users', async (req, res)=> {
    const timestampActual = new Date().getTime();
    const dif = timestampActual - req.session.lastLogin

    if (dif >= 3 * 60 * 60 * 1000) {
        req.session.destroy() // Destruyes la sesion
        res.render('/login')
    }else {
        // Obtener usuarios de la base de datos
        const userss = await db.User.findAll({
            order : [
                ['id', 'DESC']
            ]
        });

    }

})




//CRUDS  MODIFICAR
/*

app.get('/users/modificar/:codigo', async (req, res) => {
    const idUser = req.params.codigo

    
    const user = await db.User.findOne({
        wher : {
            id : idUser
        }
    })
})

*/

app.get('/pets/modificar',(req, res) => {
    
})

