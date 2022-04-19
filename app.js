const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.set('view engine', 'ejs') 

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended : false
}))


app.use(require('./routers/index.js'));

module.exports = app


    