import routes from './routes'

// ES5
const { Client, TextContent } = require('@zenvia/sdk');
 
const client = new Client('kQWxWxvmEMlG0o_LsGDoJ0G3D7q693TCf1o4');
const whatsapp = client.getChannel('whatsapp');
const content = new TextContent('some text message here');

whatsapp.sendMessage('polished-vessel', '5511954769550', content)
    .then((response: any) => {
        console.log(response)
    })
    .catch((error: any) => {
        console.log(error)
    })