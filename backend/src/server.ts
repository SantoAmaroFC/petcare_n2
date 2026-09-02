import express, {response, type Request, type Response} from "express"
import { randomUUID } from "node:crypto"
import pg from 'pg'
import { pool } from "./database/connection.js"
const { Pool } = pg


const app = express()
const port = 3000

app.use(express.json())

app.get("/cliente", async (_request: Request,
    response: Response) => {
        try {
            const res = await pool.query("SELECT * FROM clientes")
            console.log(res);

            response.json(res.rows)
        } catch (error) {
            console.log(error)
        }
})

app.get("/animais", async (_request: Request,
        response: Response) => {
            try {
                const res = await pool.query("SELECT * FROM animais")
                console.log(res);
                response.json(res.rows)
            } catch (error) {
                console.log(error)
            }
        }
)


interface CreateUserBody {
    name: string;
}

app.post("/users", (request: Request<object, object,
    CreateUserBody>, Response: Response) => {
    const name = request.body.name?.trim()
        if(!name) {
            return response.status(400).json({
                error: "Name is required"

                
            })
        }

       

        return Response.status(201).json({
            id: randomUUID(),
            name

            
        })
        
})




app.listen(port,()=> {
    console.log(`API rodando em http://localhost:${port}`);
})