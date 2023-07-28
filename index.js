const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const bookRoutes = require('./controllers/books')

const app = express()

app.use('/books', bookRoutes)
app.use(express.json())

// db connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('DB connected'))
    .catch(err => console.error(err));

const PORT = process.env.PORT

app.listen(PORT, console.log(`listening on port ${PORT}`))