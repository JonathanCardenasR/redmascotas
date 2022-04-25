const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.set('view engine', 'ejs') 
app.set('views', __dirname + '/views')

app.use(express.static(__dirname + '/assets'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended : false
}))


app.use(require('./routers/index.js'));

module.exports = app


    