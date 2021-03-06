var PORT = process.env.PORT || 8000

const res = require('express/lib/response')
const app = require('./app')
const db = require('./model/models')
const http = require('http');
const socketio = require('socket.io');
const bcrypt = require('bcrypt')
const server = http.createServer(app);
const express = require('express')

const io = socketio(server);

const botName = 'Sistema';

const formatMessage = require('./model/mensajeModelo');

const usuarios = []


const {
  userJoin,
  getCurrentUser,
  userLeave,
  getRoomUsers
} = require('./utils/users');
const { post } = require('./routers');

app.set('views', __dirname + "/views")


app.use(express.urlencoded({ extended: false }))

// Run when client connects
io.on('connection', socket => {
    socket.on('joinRoom', ({ username, room }) => {
      const user = userJoin(socket.id, username, room);

      let mensajeSaludo = new formatMessage(botName, 'Bienvenido a PetBook Chat!')
  
      socket.join(user.room);
  
      // Welcome current user
      socket.emit('message', mensajeSaludo);

      let mensajeInicio = new formatMessage(botName, `${user.username} se unido a la conversación`)

      // Broadcast when a user connects
      socket.broadcast
        .to(user.room)
        .emit(
          'message',
          mensajeInicio 
        );
  
      // Send users and room info
      io.to(user.room).emit('roomUsers', {
        room: user.room,
        users: getRoomUsers(user.room)
      });
    });
  
    // Listen for chatMessage
    socket.on('chatMessage', msg => {
      const user = getCurrentUser(socket.id);
      let mensaje= new formatMessage(user.username, msg)
      io.to(user.room).emit('message', mensaje);
    });
  
    // Runs when client disconnects
    socket.on('disconnect', () => {
      const user = userLeave(socket.id);
  
      if (user) {
        let mensajeSalida = new formatMessage(botName, `${user.username} salio de la conversación`)
        io.to(user.room).emit(
          'message',
          mensajeSalida
        );
  
        // Send users and room info
        io.to(user.room).emit('roomUsers', {
          room: user.room,
          users: getRoomUsers(user.room)
        });
      }
    });
  });


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
app.get('/page', async (req, res) => {

    const posts = await db.Post.findAll({
      order : [
        ['id','DESC']
      ]
    });
    res.render('page-vet',{
      posts : posts
    })
  
})

app.get('/map',(req, res) =>{
    const textoRespuesta = "Sesion Iniciada"
    res.render('prueba1M')
})


app.get('/home',(req, res) =>{
  const textoRespuesta = "Sesion Iniciada"
  res.render('home')
})

app.post('/home',(req, res) =>{
  
})

app.get('/Register',(req, res) =>{
  const textoRespuesta = "Sesion Iniciada"
  res.render('Register.ejs')
})

app.post('/Register', async (req, res) => {
    try {
    const hashedPassword = await bcrypt.hash(req.body.contraseña, 10)
    usuarios.push({
      id: Date.now().toString(),
      usuario: req.body.usuario,
      email: req.body.email,
      contraseña: hashedPassword
    })
    res.redirect('/home')
  } catch {
    res.redirect('/Register')
  }
  console.log(usuarios)
})
app.get('/page-userProfile',(req, res) =>{
  const textoRespuesta = "Sesion Iniciada"
  res.render('page-userProfile')
})




server.listen(PORT, ()=> {
    console.log(`El servidor se inicio correctamente en el puerto ${PORT}`)
})
/*
//LOGIN
app.get('/login', (req, res)=> {
  if (req.session.username != undefined) {
      req.session.lastLogin = new Date().getTime()
      res.redirect('/')
  }else {
      res.render('login')
  }
  
})

app.post('/login', (req, res) => {
  const usuario = req.body.username
  const password = req.body.password

  if (usuario == "pw" && password == "123") {
      // Login correcto
      req.session.username = usuario // guardando variable en sesion
      res.redirect("/")
  }else {
      res.redirect('/login')
  }
})

*/
// 
app.get('/users', async (req, res)=> {
    
        // Obtener usuarios de la base de datos
        const users = await db.User.findAll({
            order : [
                ['id', 'DESC']
            ]
        });
        res.render('users',{
          users : users
        })

  
})


//CRUDS  MODIFICAR
app.get('/users/update/:codigo', async (req, res) => {
    const idUser = req.params.codigo
    
    const user = await db.User.findOne({
        where : {
            id : idUser
        }
    })
    res.render('users_update',{
      user : user
    })
})

app.post('/users/update',async (req, res)=>{
  const idUser = req.body.user_id
  const nombre = req.body.user_nombre
  const apellido = req.body.user_apellido
  const usuario = req.body.user_usuario
  const contraseña = req.body.user_contraseña
  const correo = req.body.user_correo
  const foto = req.body.user_foto

  const user = await db.User.findOne({
    where :{
      id : idUser
    }
  })
  
  user.nombre = nombre
  user.apellido = apellido
  user.usuario = usuario
  user.contraseña = contraseña
  user.correo = correo
  user.foto = foto

  console.log
  await user.save()



  res.redirect('/users')
})

app.get('/pets/update',(req, res) => {
    
})

//CRUD ELIMINAR

app.get('/users/eliminar/:codigo', async (req, res) => {
  const idUser = req.params.codigo
  await db.User.destroy({
    where:{
      id : idUser
    }
  })
  res.redirect('/users')
})

//NUEVA PUBLICACION
app.get('/post/create', async (req, res) => {
	
  res.render('page-vet')
})

app.post('/post/create', async (req, res) => {
  const postTitulo= req.body.postTitulo
  const postBody = req.body.postBody

  

  db.Post.create({
      titulo : postTitulo,
      body : postBody,
      
      
  })

  res.redirect('/page')
})