const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();
const bodyParser = require('body-parser');
const cors = require('cors')

app.use(cors());
app.use(bodyParser.json());

//IMPORT ROUTE

const userRoute = require('./routes/user');


//INIT ROUTE
app.use('/user', userRoute)


//MONGODB CONNECTION
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true })
    .then(() => console.log("MongoDB conected ..."))
    .catch(err => console.log(err));


//START SERVER
app.listen(8000)