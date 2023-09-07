const Task = require('./model')

const updateTask = (req, res) => {
    const taskId = req.params.taskId;
    Task.findByIdAndUpdate(taskId, req.body)
        .exec()
        .then(result => res.status(200).send("Task was updated"))
        .catch(error => res.status(400).send('Server is not available'))
}
module.exports = updateTask;