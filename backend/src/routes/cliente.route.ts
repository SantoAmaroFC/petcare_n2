import { Router, type Request, type Response } from "express";
import { clienteService } from "../services/cliente.service.js"
import { CriarCliente } from "../types/cliente.js"


export const clienteRouter = Router()

clienteRouter.get("/", async (_request: Request, response: Response) => {
    try {
       const res = await clienteService.getAll()
       return response.json(res) 
    } catch (error) {
        console.error(error);
        return response.status(500).json({
            error: "Erro Interno"
        })
    }
})

clienteRouter.post("/", async (request: Request<{}, {}, CriarCliente>, response: Response) => {
    try {
        const dados = request.body 

        const cliente = await  clienteService.create(dados)
        return response.status(201).json(cliente)
    } catch (error) {
        console.error(error);

        return response.status(500).
        json({
            error: "Erro Interno"
        })
    }
}) 