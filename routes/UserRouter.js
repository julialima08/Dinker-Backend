const Router = require('express').Router()
const controller = require('../controllers/UserController')
const middleware = require('../middleware')

Router.get('/', controller.GetUsers)
Router.get('/:user_Id', controller.GetUserById)
Router.post('/', controller.CreateUser)
Router.put(
  '/:user_Id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.UpdateUser
)
Router.delete(
  '/:user_Id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.DeleteUser
)
// Router.get('/:user_Id/posts', controller.GetUserPosts)

module.exports = Router