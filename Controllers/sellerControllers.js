import jwt from 'jsonwebtoken'
import { postAddCarService } from "../Services/sellerServices.js";
import registerVehicleSchema from '../Schemas/registerVehicleSchema.js';
export const postAddCarController = async(req, res) => {
    try {
        const token = req.cookies.token
        const decode = jwt.verify(token, 'clave-secreta')
        const id_cuenta = decode.dataCookie.id
        
        const {marca, modelo, creado, color, categoria, traccion, pasajeros, descripcion, precio, imagenes, videos} = req.body

        const { error } = registerVehicleSchema({marca, modelo, creado, color, categoria, traccion, pasajeros, descripcion, precio, imagenes, videos})
        if (error) {
            return res.status(400).json(error)
        }

        const data = await postAddCarService(marca, modelo, creado, color, categoria, traccion, pasajeros, descripcion, precio, imagenes, videos, id_cuenta)
        console.log(`${[decode.dataCookie.id, decode.dataCookie.usuario]} ha añadido el vehiculo ${marca} ${modelo} exitosamente`)
        return res.status(200).json({Mensaje: 'Vehiculo añadido correctamente'})


    } catch (error) {
        console.log(error)
        return res.status(500).json({Mensaje: 'Ha habido un error en el servidor'})
    }
}