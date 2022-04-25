var PORT = process.env.PORT || 8000

const res = require('express/lib/response')
const app = require('./app')

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


app.listen(PORT, ()=> {
    console.log(`El servidor se inicio correctamente en el puerto ${PORT}`)
})