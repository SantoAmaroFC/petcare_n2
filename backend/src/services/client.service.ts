
import { pool } from "../databse/connection.js";
import { Cliente, CriarCliente } from "../types/cliente.js";
import { clientRepository } from "../repositories/client.repository.js";
class ClienteService {
  async getAll(): Promise<Cliente[]> {
    return await clientRepository.getAll()
  }

  async getById(id: string): Promise<Cliente[]> {
   return await clientRepository.getById(id)
  }

  async create(dados: CriarCliente): Promise<Cliente> {
    if (!dados.nome) {
      throw new Error("o Nome e necesario");

    }
    const Cliente = clientRepository.create(dados)
    if (!Cliente) {
      throw new Error("O banco nao retornou o funcionario cadastrado")
    }
  }

  async inativarCliente(id: string): Promise<Cliente> {
    return await clientRepository.getById(id)
  }
}

export const clientService = new ClienteService();
