const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskSchema = new Schema({
    title:{
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    priority: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        required: true
    },
    date: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('tasks', taskSchema);