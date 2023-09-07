const Router = require('express');
const postStatus = require('./postStatus')
const getStatus = require('./getStatus')
const updateStatus = require('./updateStatus')
const statusRouter=Router();


statusRouter.post('/', postStatus)
statusRouter.get('/', getStatus)
statusRouter.patch('/:statusId', updateStatus)
module.exports = statusRouter;