import { Router } from "express";
import { animalController } from "../controllers/animal.controller.js";


export const animalRouter = Router();

animalRouter.get("/", animalController.getAll);
animalRouter.post("/", animalController.create);
animalRouter.get("/", animalController.get);
animalRouter.delete("/:id", animalController.delete);


