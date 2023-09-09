const Router = require('express')
const postTask = require('./postTask')
const getTask = require('./getTask')
const updateTask = require('./updateTask')
const deleteTask = require('./deleteTask')
const taskRouter = Router()

taskRouter.post('/', postTask)
taskRouter.get('/', getTask)
taskRouter.patch('/:taskId', updateTask)
taskRouter.delete('/:taskId', deleteTask)

module.exports = taskRouter;

