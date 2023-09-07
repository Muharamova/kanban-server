const mongoose = require('mongoose');
const { Schema } = mongoose;

const taskSchema = new Schema({
    name: String, // String is shorthand for {type: String}
    description: String,
    priority: Number,
    status:  String,
});
module.exports = mongoose.model('Task', taskSchema);