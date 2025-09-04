import jwt from 'jsonwebtoken'
export const userAuthorization = (req, res, next) => {
    try {
        const token = req.cookies.token

        if(token){
            const decode = jwt.verify(token, 'clave-secreta')
            
            
            next()
        }
        else{
            return res.status(401).json({Mensaje: 'Usuario no autorizado'})
        }

        
        
    } catch (error) {
        console.log(error)
        return res.status(500).json({Mensaje: 'Ha habido un errors'})
        
    }
}