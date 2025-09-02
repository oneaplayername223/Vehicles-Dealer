import express from 'express'
import colors from 'colors'


const app = express()
const port = 5000
app.use(express.json())



app.listen(port, () =>{
    console.log('Servidor Iniciado Exitosamente en el puerto:'.bgGreen, port)
}) 