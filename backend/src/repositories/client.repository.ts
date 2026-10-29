
import { pool } from "../databse/connection.js";
import { Cliente, CriarCliente } from "../types/cliente.js";

class ClientRepository {
  async getAll(): Promise<Cliente[]> {
    const res = await pool.query<Cliente>("SELECT * FROM clientes");

    return res.rows;
  }

  async getById(id: string): Promise<Cliente[]> {
    const res = await pool.query<Cliente>(
      "SELECT * FROM clientes WHERE id = $1",
      [id],
    );
    return res.rows;
  }

  async create(dados: CriarCliente): Promise<Cliente> {
    const res = await pool.query<Cliente>(
      `INSERT INTO clientes 
            (nome, telefone, idade, email) VALUES ($1, $2, $3, $4) RETURNING *`,
      [dados.nome, dados.telefone, dados.idade, dados.email],
    );

    

    

    return res.rows[0];
  }

  async inativarCliente(id: string): Promise<Cliente> {
    const res = await pool.query(
      "UPDATE clientes SET status='inativo' WHERE id = $1",
      [id],
    );

    return res.rows[0];
  }
}

export const clientRepository = new ClientRepository();
