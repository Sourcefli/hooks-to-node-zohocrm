
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const router = express.Router()
const exphbs = require('express-handlebars')
const path = require('path')

const port = 4040

app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public'))

//Handlebars
app.engine('.hbs', exphbs({extname: '.hbs'}));
app.set('view engine', '.hbs')
app.set('views', 'views')

//Route Imports 
const leadsController = require('./controllers/leadsController')
const errorController = require('./controllers/errorsController')

app.use('/leads', leadsController.getAllLeads);

app.use('/', errorController.get404);

app.listen(port)