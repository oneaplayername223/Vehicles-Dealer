import { getGuessIndexService, getGuessCarService, getDealerIndexService, getDealerService, registerService, postLoginService } from "../Services/guessServices.js";
import registerSchema from "../Schemas/registerSchema.js";
import loginSchema from "../Schemas/loginSchema.js";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
export const getGuessIndexController = async(req, res) => {
try {
    const data = await getGuessIndexService()
    return res.status(200).json(data)
    
} catch (error) {
    return res.status(500).json(error)
}
}

export const getGuessCarController = async(req, res) => {
    try {
        const { id } = req.params
        const data = await getGuessCarService(id)
        const result = data[0]
        
        if (!result) {
            return res.status(404).json({ message: 'Vehiculo no encontrado' })
        }
        
        return res.json(data)
        
    } catch (error) {
        return res.status(500).json(error)
    }
}


export const getDealerIndexController = async(req, res) => {
    try {
        const data = await getDealerIndexService()
        return res.status(200).json(data)
        
    } catch (error) {
        return res.status(500).json(error)
    }
}

export const getDealerController = async(req, res) => {
    try {
        const { id } = req.params

        const data = await getDealerService(id)
        const result = data[0]
        
        if (!result) {
            return res.status(404).json({ message: 'Dealer no encontrado' })
        }

        return res.json(data)
        
    } catch (error) {
        return console.log(error)
        
    }
}

export const postRegisterController = async(req, res) => {
    try {
        const {nombre, apellido, fecha_nacimiento, cedula, correo, usuario, clave} = req.body

        const { error } = registerSchema({nombre, apellido, fecha_nacimiento, cedula, correo, usuario, clave})
        
        if (error) {
            return res.status(400).json(error)
        }

        const hashedPassword = bcrypt.hashSync(clave, 10)
        const data = await registerService(nombre, apellido, fecha_nacimiento, cedula, correo, usuario, hashedPassword)
        return res.status(200).json(data)

    } catch (error) {
        return res.json(error)
    }
}



export const postLoginController = async (req, res) => {
    const {usuario, clave} = req.body
    const {error} = loginSchema({usuario, clave})

    try {
    if (error) {
        return res.status(400).json(error)
    }

    const data = await postLoginService(usuario, clave)
    const result = data[0]

    if (!result) {
        return res.status(404).json({ message: 'Usuario no encontrado' })
    }

    const comparePassword = bcrypt.compareSync(clave, result.clave)

    if (comparePassword) {
    const tokent = jwt.sign({ id: result.id }, 'clave-secreta', { expiresIn: '1h' })
    const cookie = res.cookie('token', tokent, { httpOnly: true })
    return res.status(200).json({ message: 'Inicio de sesión exitoso'})



    

}

    return res.status(401).json({ message: 'Contraseña incorrecta' })
        
    } catch (error) {
        return res.status(500).json(error)
        
    }
}