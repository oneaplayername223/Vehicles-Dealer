import jwt from 'jsonwebtoken'
import { postAddCarService } from "../Services/sellerServices.js";

export const postAddCarController = async(req, res) => {
    try {
        const token = req.cookies.token
        const decode = jwt.verify(token, 'clave-secreta')
        const id_cuenta = decode.dataCookie.id
        
        const {marca, modelo, creado, color, categoria, traccion, pasajeros, descripcion, precio, imagenes, videos} = req.body

        const data = await postAddCarService(marca, modelo, creado, color, categoria, traccion, pasajeros, descripcion, precio, imagenes, videos, id_cuenta)
        return res.status(200).json({Mensaje: 'Vehiculo añadido correctamente'})


    } catch (error) {
        console.log(error)
        return res.status(500).json({Mensaje: 'Ha habido un error en el servidor'})
    }
}