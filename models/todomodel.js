const mongoose = require('mongoose')
mongoose.set('strictQuery', true);
const todoSchema = new mongoose.Schema({
    text:{
        type: String,
        require: true
    }
})

module.exports = mongoose.model("ToDo",todoSchema)