import { db } from "../database/knex.js";
import { frotaRepository } from "../repositories/frota.repository.js";
import { Frota, CriarFrota } from "../types/frota.js";

class FrotaService {
  async create (dados: CriarFrota) {
    return await frotaRepository.create(dados)
  }
  async getAll() {
    return await frotaRepository.getAll()
  }
  async getById(id: string) {
    return await frotaRepository.getById(id)
  }
  async update(id: string, dados: CriarFrota) {
    return await frotaRepository.update(id, dados)
  }
  async delete (id: string){
    return await frotaRepository.delete(id)
  }

}



export const frotaService = new FrotaService();
