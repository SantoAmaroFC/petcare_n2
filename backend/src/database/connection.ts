import pg from 'pg'
import 'dotenv/config'
const { Pool } = pg

export const pool = new Pool()

pool.on('error', (err) => {
    console.error('Uneexpected error on idle client', err)
    process.exit(1)
})