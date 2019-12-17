const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const BlogSchema = new Schema({
    title: {
        type: String,
        required:true,
    },
    content: {
        type: String,
        required: true,
    },
    person: {
        type: Schema.Types.ObjectId,
        ref: 'person',
    },
    cover:{
        type: String,
    },
    is_active:{
        type: Boolean,
        default: true,
    },
}, {
    timestamps: true,
});

module.exports = mongoose.model('blogs', BlogSchema);