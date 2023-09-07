const Status = require('./model');

const  updateStatus= (req, res) => {
    const statusId = req.params.statusId;
    Status.findByIdAndUpdate(statusId, req.body)
        .exec()
        .then(result => res.status(200).send("Status was updated"))
        .catch(error => res.status(400).send('Status was not updated'))
}
module.exports = updateStatus;