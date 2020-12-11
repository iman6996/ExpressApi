const mongoose = require('mongoose');
const { stringify } = require('querystring');
const Schema = mongoose.Schema;


exports.obj = new Schema({
    firstname:{
        type:String,
        require:'Enter a firstname'
    },
    lastname:{
        type:String,
        require:'Enter a lastname'
    },
    email: String,
    company: String,
    phone: Number,
    message: String,
    created_date: {
        type:Date,
    default: Date.now,
    }
})