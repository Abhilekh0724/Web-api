const express = require('express')
//import express
const dotenv = require('dotenv');
const mongoose= require('mongoose');
const connectDB = require('./database/database');
const app = express()
// creting an express app
//Json config
app.use(express.json()) 
 
const port = 5000;
// Defining the port
 
//confiruration dotenv
dotenv.config()

// Connecting to the database 
connectDB(); 

app.get('/test',(req,res)=>{
    res.send('Test Api is Working...!')
})
//Configuring user routes
app.use('/api/user',require('./routes/userRoutes'))
app.use('/api/reservations',require('./routes/reservationsRoutes'))
app.use('/api/book-appointments',require('./routes/appointmentsRoutes'))

// app.use('/api/product',require('./routes/productRoutes'))



// app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
// running the File
//creating  a test route or endpoint



// API URL
//http://localhost:5000/api/user/create