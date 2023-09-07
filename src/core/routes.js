const home = require('../home/home')
const taskRouter = require('../tasks/taskRouter');
const statusRouter = require('../statuses/statusRouter');
function routes(app){
    app.use('/tasks', taskRouter)
    app.use('/statuses', statusRouter)


    app.use('/', home)
}
module.exports = routes;