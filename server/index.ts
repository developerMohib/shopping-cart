import express, { Request, Response } from 'express';
import cors from "cors"
const app = express()

// middleware
app.use(express.json())
app.use(cors())


// home server basic
app.get('/', (req: Request, res: Response) => {
    res.send({
        status: 200,
        message: "Hello SHOP server is ready"
    })
})

// server with port
const port: (number | string) = process.env.PORT || 3333
app.listen(port, () => {
    console.log(`server is running at ${port}`);
})