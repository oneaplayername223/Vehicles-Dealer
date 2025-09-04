import jwt from 'jsonwebtoken'
import idSchema from '../Schemas/idSchema.js'
export const validateId = async(req, res, next) => {
        const token = req.cookies.token

    const decode = jwt.verify(token, 'clave-secreta')

    req.id_cuenta = decode.dataCookie.id;
    const {id} = req.params
    
    const { error } = await idSchema({id_cuenta: decode.dataCookie.id, id})
      if (error) {
        return res.status(400).json(error.details[0].message)
    }

     next()
  
   
}