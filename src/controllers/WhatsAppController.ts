import { Request, Response } from 'express'
import connection from '../connection'
import routes from '../routes'

export default class WhatsAppController {
    async create(req: Request, res: Response) {
        const { telefone, mensagem } = req.body

        const { Client, TextContent } = require('@zenvia/sdk');
        
        const client = new Client('kQWxWxvmEMlG0o_LsGDoJ0G3D7q693TCf1o4');
        const whatsapp = client.getChannel('whatsapp');
        const content = new TextContent(mensagem);

        whatsapp.sendMessage('polished-vessel', telefone, content)
        .then((response: any) => {
            console.log(response)
        })
        .catch((error: any) => {
            console.log(error)
        })
    }
}



