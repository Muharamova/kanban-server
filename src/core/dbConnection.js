const mongoose = require('mongoose');
function dbConnect() {
    mongoose.connect('mongodb+srv://name:<parol>@cluster0.slhycaz.mongodb.net/', {useNewUrlParser: true})
        .then(() => console.log('Mongo conection Ok'))
        .catch(err => console.log(err))
}
mongoose.set('strictQuery', false);

module.exports = dbConnect
