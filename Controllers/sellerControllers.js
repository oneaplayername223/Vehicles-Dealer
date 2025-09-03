import jwt from 'jsonwebtoken'
import { postAddCarService, postviewCarService, postviewCarByIdService, postDeleteCarService, postEditCarService } from "../Services/sellerServices.js";
import registerVehicleSchema from '../Schemas/registerVehicleSchema.js';
import idSchema from '../Schemas/idSchema.js';
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


export const postviewCarController = async(req, res) => {
    try {
        const token = req.cookies.token
        const decode = jwt.verify(token, 'clave-secreta')
        const id_cuenta = decode.dataCookie.id

        const data = await postviewCarService(id_cuenta)
        return res.status(200).json(data)
        
    } catch (error) {
        return res.status(500).json(error)
        
    }
}

export const postviewCarByIdController = async(req, res) => {
        const {id} = req.params  
        const { error } = idSchema({id})
    if (error) {
        return res.status(400).json(error)
    }
    try {
    
        const data = await postviewCarByIdService(id)
        const result = data[0]
        if(!result){
            return res.status(404).json({Mensaje: 'Vehiculo no encontrado'})
        }

        return res.status(200).json(data)
        
    } catch (error) {
        return res.status(500).json(error)
        
    }
}
export const postDeleteCarController = async(req, res) =>{
    const token = req.cookies.token
    const {id} = req.params
    const { error } = idSchema({id})
    if (error) {
        return res.status(400).json(error)
    }
    try {
        const decode = jwt.verify(token, 'clave-secreta')
        const id_cuenta = decode.dataCookie.id
        const data = await postDeleteCarService(id, id_cuenta)
        const affectedRows = data.affectedRows

        if (affectedRows === 0 || affectedRows > 1) {
            return res.status(404).json({Mensaje: 'Vehiculo no encontrado'})
        }     


        console.log(`${[decode.dataCookie.id, decode.dataCookie.usuario]} ha eliminado el vehiculo ${id} exitosamente`)
        return res.status(200).json({Mensaje: 'Vehiculo eliminado correctamente'})
        
    } catch (error) {
        console.log(error)
        return res.status(500).json({Mensaje: 'Ha habido un error en el servidor'})
    }
}

export const postEditCarController = (req, res) => {
    //Client request
    const {marca, modelo, creado, color, categoria, traccion, pasajeros, descripcion, precio, imagenes, videos} = req.body
    const {id} = req.params
    //Joi validations
    const { error } = registerVehicleSchema({marca, modelo, creado, color, categoria, traccion, pasajeros, descripcion, precio, imagenes, videos})
    const { error2 } = idSchema({id})
    //cookies request
    const token = req.cookies.token
    const decode = jwt.verify(token, 'clave-secreta')
    const id_cuenta = decode.dataCookie.id

    if (error || error2) {
        return res.status(400).json(error || error2)
    }

    try {
    const data = postEditCarService(marca, modelo, creado, color, categoria, traccion, pasajeros, descripcion, precio, imagenes, videos, id, id_cuenta)
    const result = data[0]

    if (data.affectedRows === 0 || data.affectedRows > 1) {
            return res.status(404).json({Mensaje: 'Vehiculo no encontrado'})
        }

        console.log(`${[decode.dataCookie.id, decode.dataCookie.usuario]} ha editado el vehiculo ${id} exitosamente`)
        res.status(200).json({Mensaje: 'Vehiculo editado correctamente'})


    } catch (error) {
        console.log(error)
        return res.status(500).json({Mensaje: 'Ha habido un error en el servidor'}) 
        
    }
}