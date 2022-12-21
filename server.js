//IMPORTS
const express = require('express')
const app = express()

//APP DEPENDENCIES
const cors = require('cors')
const morgan = require('morgan')


//CONTROLLER IMPORT
const peopleController = require('./controllers/people-controller')

require('dotenv').config();
require('./config/db.connection')//node runs all of the code in db.connection. 

const{ PORT } = process.env

//EXPRESS APP MIDDLEWARE
app.use(express.json())
//CORS HELPER FUNCTION
app.use(cors())

app.use(morgan('dev'))

// ROUTER MIDDLEWARE
app.use('/people', peopleController)

//ROOT HOME ROUTE FOR API REDIRECTS TO PEOPLE INDEX.
app.get("/", (req, res) =>{
    res.redirect('/people')
})


app.listen(PORT, () => { `Listening on PORT: ${PORT}`})