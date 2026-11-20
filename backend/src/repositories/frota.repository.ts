import { db } from "../database/knex.js";
import type { CriarFrota } from "../types/frota.js";

class FrotaRepository {

    async create(dados: CriarFrota) {
        const [CriarFrota] = await db('frotas').insert(dados).returning("*")
        return CriarFrota
    }
    
    async getAll() {
        const Frota = await db('frotas').select("*").returning("*")
        return Frota
    }

    async getById(id: string) {
        const [Frota] = await db('frotas').where({id}).select("*").returning("*")
        return [Frota]
    }

    async update(id: string, dados: CriarFrota) {
        const [FrotaAtualizada] = await db('frotas').where({id}).update(dados).returning("*")
        return FrotaAtualizada
    }

    async delete(id: string) {
        const [FrotaDeletada] = await db('frotas').where({id}).del().returning("*")
        return {
            frota_deletada: {
                status: 'ok',
                message: "Frota deletada com sucesso",
                FrotaDeletada
            }
        }
    }

}

export const frotaRepository = new FrotaRepository()

