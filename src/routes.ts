
import express from 'express'

import WhatsAppController from './controllers/WhatsAppController'

const routes = express.Router()
const wppController = new WhatsAppController()

routes.post('/wpp/text', wppController.createTextMessage)
routes.post('/wpp/file', wppController.createFileMessage)

export default routes