const Status = require('./model');

function postStatus(req, res) {
    const newStatus = new Status(req.body);
    newStatus.save()
        .then(result =>
            res.status(203).send('Status was created')
        )
        .catch(error => console.log(error))
}

module.exports = postStatus;