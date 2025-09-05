import express from 'express'
import guessRoutes from './Routes/guessRoutes.js'
import sellerRoutes from './Routes/sellerRoutes.js'
import cookieparser from 'cookie-parser'
import { errorHandler } from './middlewares/errorHandler.js'


const app = express()
const port = 5000
app.use(express.json())
app.use(cookieparser())

app.use(guessRoutes)
app.use(sellerRoutes)
app.use(errorHandler)


app.listen(port, () =>{
    console.log('Servidor Iniciado Exitosamente en el puerto:'.bgGreen, port)
}) 