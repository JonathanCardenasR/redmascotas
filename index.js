var PORT = process.env.PORT || 8000

const res = require('express/lib/response')
const app = require('./app')



//PaginaDeSesion
app.get('/Sesion',(req, res) =>{
    const textoRespuesta = "Sesion Iniciada"
    res.render('home')
})



app.listen(PORT, ()=> {
    console.log(`El servidor se inicio correctamente en el puerto ${PORT}`)
})