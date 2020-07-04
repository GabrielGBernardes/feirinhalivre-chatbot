
import express from 'express'

import ClientController from './controllers/ClientController'
//import SMSController from './controllers/SMSController'
//import SOSNumbersController from './controllers/SOSNumbersController'

const routes = express.Router()
const usersController = new ClientController()
//const smsController = new SMSController()
//const sosController = new SOSNumbersController()

routes.get('/cliet', usersController.index)
routes.get('/cliet/:telefone', usersController.show)
routes.post('/cliet', usersController.create)

export default routes