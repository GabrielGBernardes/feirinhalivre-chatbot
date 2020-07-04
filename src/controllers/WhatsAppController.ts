import { Request, Response } from 'express'
import connection from '../connection'
import routes from '../routes'

export default class WhatsAppController {
    async index(req: Request, res: Response) {
        const { params: { telefone } } = req

        const { Client, TextContent } = require('@zenvia/sdk');
        
        const client = new Client('kQWxWxvmEMlG0o_LsGDoJ0G3D7q693TCf1o4');
        const whatsapp = client.getChannel('whatsapp');
        const content = new TextContent('some text message here');

        whatsapp.sendMessage('polished-vessel', telefone, content)
        .then((response: any) => {
            console.log(response)
        })
        .catch((error: any) => {
            console.log(error)
        })
    }
}



