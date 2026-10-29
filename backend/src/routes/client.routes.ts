

import { Router } from "express";
import { clienteController } from "../controllers/client.controller.js";

export const clienteRouter = Router();

clienteRouter.get("/", clienteController.getAll);
clienteRouter.get("/:id", clienteController.getById);
clienteRouter.post("/", clienteController.create);
clienteRouter.patch("/:id/inativar", clienteController.inativarCliente);


