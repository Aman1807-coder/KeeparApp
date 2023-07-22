const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/keeparDB', {useNewUrlParser : true});

const userSchema = new mongoose.Schema({
    name : String,
    contact : String,
    email : String,
    password : String,
    notes: []
});

module.exports = mongoose.model('User', userSchema );
