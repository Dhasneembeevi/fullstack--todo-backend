const express = require('express');
const todoroutes = require('./routes/todoRoute');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config();
const app =express();
mongoose
    .connect(process.env.MONGODB_URL)
    .then(()=>console.log('connected to mongoDB'))
    .catch(()=> console.log(err))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());    

// sequence matters ---------- use body parser before routes!!!!
app.use(todoroutes);

const PORT = process.env.port || 5000;

app.listen(PORT, ()=> console.log(`listening to port ${PORT}`));



//mongodb+srv://dhastodo:<password>@cluster0.zn68s3k.mongodb.net/?retryWrites=true&w=majority