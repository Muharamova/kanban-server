const Task = require('./model');

const getTask = (req,res) => {
   Task.find()
       .exec()
       .then((result) =>
        res.status(200).send(result)
       )
       .catch((error) =>
        res.status(400).send("Task wasn't found")
       )
}
module.exports = getTask;