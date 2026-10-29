

import { Cliente, CriarCliente } from "../types/cliente.js";
import { clientRepository } from "../repositories/client.repository.js";

class ClienteService {
  async getAll(): Promise<Cliente[]> {
    return await clientRepository.getAll();
  }

  async getById(id: string): Promise<Cliente[]> {
    return await clientRepository.getById(id);
  }

  async create(dados: CriarCliente): Promise<Cliente> {
    if (!dados.nome) {
      throw new Error("O nome é necessário");
    }

    const cliente = await clientRepository.create(dados);

    if (!cliente) {
      throw new Error("O banco não retornou o cliente cadastrado");
    }

    return cliente;
  }

  async inativarCliente(id: string): Promise<Cliente> {
    return await clientRepository.inativarCliente(id);
  }
}

export const clientService = new ClienteService();
