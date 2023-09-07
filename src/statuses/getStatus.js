const Status = require('./model');
const getStatus = (req, res) => {
   Status.find()
       .exec()
       .then(result =>
       res.status(200).send(result)
       )
       .catch(error =>
           res.status(400).send('Status was not found')
       )
}
module.exports = getStatus;