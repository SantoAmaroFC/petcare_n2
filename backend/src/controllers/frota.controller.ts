import { type Request, type Response } from "express";
import { frotaService } from "../services/frota.service.js";
import type { CriarFrota } from "../types/frota.js";

class FrotaController {
    async create(req: Request<CriarFrota>, res: Response) {
        try {

        
        const frota = await frotaService.create(req.body)
        return res.json(frota)
        } catch (error ) {
            console.error(error);
            return res.json({ message: "Erro interno do servidor"})
        }
        
         }
         
         
}

