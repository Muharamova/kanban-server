const Task = require('./model');

function deleteTask(req, res) {
    const taskId = req.params.taskId;
    Task.deleteOne({_id: taskId})
        .exec()
        .then((result) =>
            res.status(200).send('Task was deleted'))
        .catch((error) => res.status(400).send('Task was not deleted'))
}

module.exports = deleteTask;