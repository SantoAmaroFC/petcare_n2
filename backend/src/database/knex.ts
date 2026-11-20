import "dotenv/config"
import Knex from 'knex'


export const db = Knex({
    client: 'pg',
    connection: {},
    debug: true
})

 