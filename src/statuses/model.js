const mongoose = require('mongoose') ;
const { Schema } = mongoose;

const statusSchema = new Schema({
   name: String
});
module.exports =mongoose.model('Status', statusSchema)