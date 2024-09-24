require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT
const colors = require('colors')

// Database
const dbConnect = require('./db/db.js')
dbConnect()


// Middleware
app.use(express.json())
app.use(cors())

// Routes

app.use('/users', require('./routes/userRoutes.js'))

app.get('/', (req, res) => {
    console.log('\n\tHome Page\n'.white)
    res.send('Home Page')
})

app.listen(port, (req, res) => {
    console.log(`\n\tServer is running on port:\n`.brightGreen + `\thttp://localhost:${port}\n`.yellow)
}) 