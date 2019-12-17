const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const Schema = mongoose.Schema;

const PersonSchema = new Schema({
    first_name:{
        type: String,
        required:true,
    },
    last_name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique:true,
    },
    password:{
        type:String,
    },
    gender:{
        type: String,
        enum:['M','F','O'],
    },
    person:{
        type: [Schema.Types.ObjectId],
        ref:'person'
    },
    is_active:{
        type: Boolean,
        default: true,
    }
},{
    timestamps:true,
});

PersonSchema.pre('save', function(next){
    const person = this;
    const SALT_FACTOR = 10;
    if (!person.isModified('password')) { return next();}
    bcrypt.genSalt(SALT_FACTOR, function (err, salt) {
        if(err) return next(err);
        bcrypt.hash(person.password, salt, function(error, hash){
            if (error) return next(error);
            person.password = hash;
            next();
        });
    });
});

module.exports = mongoose.model('person', PersonSchema);