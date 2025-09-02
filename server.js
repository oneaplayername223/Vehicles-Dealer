import express from 'express'
import colors from 'colors'
import guessRoutes from './Routes/guessRoutes.js'

const app = express()
const port = 5000
app.use(express.json())

app.use(guessRoutes)


app.listen(port, () =>{
    console.log('Servidor Iniciado Exitosamente en el puerto:'.bgGreen, port)
}) 