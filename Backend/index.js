require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const morgan = require('morgan')
const connectDB = require('./config/db')
const reservationRoute = require('./routes/reservation')
connectDB``

// Middlewares
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(morgan('dev'))
app.use(cors())

// Routes
app.use('/', reservationRoute)

// Port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server Running in ${process.env.NODE_ENV} mode on port ${PORT}`)
})