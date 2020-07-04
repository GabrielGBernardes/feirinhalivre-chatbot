
import express from 'express'

import ClientController from './controllers/ClientController'
import WhatsAppController from './controllers/WhatsAppController'

//import SMSController from './controllers/SMSController'
//import SOSNumbersController from './controllers/SOSNumbersController'

const routes = express.Router()
const usersController = new ClientController()
const wppController = new WhatsAppController()
//const smsController = new SMSController()
//const sosController = new SOSNumbersController()

routes.post('/wpp', wppController.create)

routes.get('/cliet', usersController.index)
routes.get('/cliet/:telefone', usersController.show)
routes.post('/cliet', usersController.create)

export default routes