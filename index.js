var PORT = process.env.PORT || 8000

const app = require('./app')

app.listen(PORT, ()=> {
    console.log(`El servidor se inicio correctamente en el puerto ${PORT}`)
})