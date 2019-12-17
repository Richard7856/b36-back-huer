const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const plantSchema = new Schema({
    name:{
        type:String,
        required:true,
    },
    humidity_level:{
        type: Number,
    },
    temperature:{
        type: Number,
    },
    is_active:{
        type: Boolean,
        default: true,
    },
}, {timestamps:true});

module.exports = mongoose.model('plant', plantSchema);


