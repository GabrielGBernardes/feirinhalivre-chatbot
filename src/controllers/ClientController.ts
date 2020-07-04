import { Request, Response } from 'express'
import connection from '../connection'

export default class ClientController {
    async index(req: Request, res: Response) {
        connection.query('SELECT * FROM clientes', (err: any, result: any) => {
            if (err) {
                console.log(err);
                res.status(400).send(err);
            }
            res.status(200).send(result.rows);
        });
    }

    async show(req: Request, res: Response) {
        const { params: { telefone } } = req
        connection.query(`SELECT * FROM clientes WHERE telefone = '${telefone}'`, (err: any, result: any) => {
            if (err) {
                res.status(400).send(err)
            }
            res.status(200).send(result.rows);
        })
    }

    async create(req: Request, res: Response) {
        const { cnpj_cpf, telefone, nome, sobrenome, email, senha } = req.body

        connection.query(`
            INSERT INTO clientes(cnpj_cpf, telefone, nome, sobrenome, email, senha) 
            VALUES('${cnpj_cpf}', '${telefone}', '${nome}', '${sobrenome}', '${email}', '${senha}')`, 
            (err: any, result: any) => {
                if (err) {
                    res.status(400).send(err)
                }
                res.status(200).send(result);
            }
        )
    }