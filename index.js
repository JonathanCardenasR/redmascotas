var PORT = process.env.PORT || 8000

const res = require('express/lib/response')
const app = require('./app')
const db = require('./model/models')
const http = require('http');
const socketio = require('socket.io');

const server = http.createServer(app);

const io = socketio(server);

const botName = 'ChatCord Bot';

const formatMessage = require('./utils/messages');
const {
  userJoin,
  getCurrentUser,
  userLeave,
  getRoomUsers
} = require('./utils/users');

app.set('views', __dirname + "/views")

// Run when client connects
io.on('connection', socket => {
    socket.on('joinRoom', ({ username, room }) => {
      const user = userJoin(socket.id, username, room);
  
      socket.join(user.room);
  
      // Welcome current user
      socket.emit('message', formatMessage(botName, 'Welcome to ChatCord!'));
  
      // Broadcast when a user connects
      socket.broadcast
        .to(user.room)
        .emit(
          'message',
          formatMessage(botName, `${user.username} has joined the chat`)
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
  
      io.to(user.room).emit('message', formatMessage(user.username, msg));
    });
  
    // Runs when client disconnects
    socket.on('disconnect', () => {
      const user = userLeave(socket.id);
  
      if (user) {
        io.to(user.room).emit(
          'message',
          formatMessage(botName, `${user.username} has left the chat`)
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
app.get('/page',(req, res) =>{
    const textoRespuesta = "Sesion Iniciada"
    res.render('page-vet')
})


server.listen(PORT, ()=> {
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
app.get('/users/modificar/:codigo', async (req, res) => {
    const idUser = req.params.codigo

    
    const user = await db.User.findOne({
        wher : {
            id : idUser
        }
    })
})



app.get('/pets/modificar',(req, res) => {
    
})

