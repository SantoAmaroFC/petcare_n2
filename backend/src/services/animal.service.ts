import { pool } from "../databse/connection.js";
import { Animal, CriarAnimal } from "../types/animal.js";
import { animalRepository } from "../repositories/animal.repository.js";

class AnimalService {
  async getAll(): Promise<Animal[]> {
    return await animalRepository.getAll();
  }

  async getById(id: string): Promise<Animal[]> {
    
    return await animalRepository.getById(id);
  }

  async create(dados: CriarAnimal): Promise<Animal> {
    return await animalRepository.create(dados)
  }

  async excluirAnimal(id: string): Promise<boolean> {
    return await animalRepository.excluirAnimal(id)
  }
}

export const animalService = new AnimalService();
