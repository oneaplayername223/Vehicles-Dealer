import { postAddCarService, postviewCarService, postviewCarByIdService, postDeleteCarService, postEditCarService } from "../Services/sellerServices.js";
import registerVehicleSchema from '../Schemas/registerVehicleSchema.js';

// añadir vehiculo
export const postAddCarController = async(req, res) => {
    const id_cuenta = req.id_cuenta
    try {

        
        const {marca, modelo, creado, color, categoria, traccion, pasajeros, descripcion, precio, imagenes, videos} = req.body

        const { error } = registerVehicleSchema({marca, modelo, creado, color, categoria, traccion, pasajeros, descripcion, precio, imagenes, videos})
        if (error) {
            return res.status(400).json({Mensaje: 'Ha habido un error'})
        }

        const data = await postAddCarService(marca, modelo, creado, color, categoria, traccion, pasajeros, descripcion, precio, imagenes, videos, id_cuenta)
        console.log(`${id_cuenta} ha añadido el vehiculo ${marca} ${modelo} exitosamente`)
        return res.status(200).json({Mensaje: 'Vehiculo añadido correctamente'})


    } catch (error) {
        console.log(error)
        return res.status(500).json({Mensaje: 'Ha habido un error en el servidor'})
    }
}

// ver vehiculos
export const postviewCarController = async(req, res) => {
    const id_cuenta = req.id_cuenta
    try {


        const data = await postviewCarService(id_cuenta)
        return res.status(200).json(data)
        
    } catch (error) {
return res.status(500).json({Mensaje: 'Ha habido un error en el servidor'})
        
    }
}

// ver vehiculo por id
export const postviewCarByIdController = async(req, res) => {
        const {id} = req.params
 
    try {
    
        const data = await postviewCarByIdService(id)
        const result = data[0]
        if(!result){
            return res.status(404).json({Mensaje: 'Vehiculo no encontrado'})
        }

        return res.status(200).json(data)
        
    } catch (error) {
                console.log(error)

        return res.status(500).json({Mensaje: 'Ha habido un error en el servidor'})
        
    }
}
// Eliminar vehiculo
export const postDeleteCarController = async(req, res) =>{
    const {id} = req.params
    const id_cuenta = req.id_cuenta
    try {

        const data = await postDeleteCarService(id, id_cuenta)
        const affectedRows = data.affectedRows

        if (affectedRows === 0 || affectedRows > 1) {
            return res.status(204).json({Mensaje: 'Vehiculo no encontrado'})
        }     


        console.log(`${id_cuenta} ha eliminado el vehiculo ${id} exitosamente`)
        return res.status(200).json({Mensaje: 'Vehiculo eliminado correctamente'})
        
    } catch (error) {
        console.log(error)
return res.status(500).json({Mensaje: 'Ha habido un error en el servidor'})
    }
}
// Editar vehiculo
export const postEditCarController = async (req, res) => {
    //Client request
    const {marca, modelo, creado, color, categoria, traccion, pasajeros, descripcion, precio, imagenes, videos} = req.body
    //Joi validations
    const { error } = registerVehicleSchema({marca, modelo, creado, color, categoria, traccion, pasajeros, descripcion, precio, imagenes, videos})
    //cookies request    
    const {id} = req.params
    const id_cuenta = req.id_cuenta
 


    if (error) {
        console.log(error)
        return res.status(400).json({Mensaje: 'Ha habido un error'})
    }

    try {
   
    const data = await postEditCarService(marca, modelo, creado, color, categoria, traccion, pasajeros, descripcion, precio, imagenes, videos, id, id_cuenta)
   
    if(data.affectedRows === 1 && data.changedRows === 0){
        return res.status(400).json({Mensaje: 'Ingresa la informacion nueva'})
    }
    if (data.changedRows === 1){
    console.log(`${id_cuenta} ha editado el vehiculo ${id} exitosamente`)
    return res.status(200).json({Mensaje: 'Vehiculo editado correctamente'})
    }
    if (data.changedRows === 0 && data.affectedRows === 0){
        return res.status(404).json({Mensaje: 'Vehiculo no encontrado'})
    }


   
    } catch (error) {
        console.log(error)
        return res.status(500).json({Mensaje: 'Ha habido un error en el servidor'})
        
    }
}