import connection from "./database.js";


export const getGuessIndexService = async () => {
    return new Promise((resolve, reject) => {
        try {
            const query = 'SELECT * FROM vehiculos'
            connection.query(query, (err, res) => {
                if (err) {
                   return reject(err)
                }
               return resolve(res)
            })
            
        } catch (error) {
            return res.status(500).json(error)
            
        }
    })
}


export const getGuessCarService = (id) => {
    return new Promise((resolve, reject) => {
        try {
            const query = 'SELECT * FROM vehiculos WHERE id = ?'
            connection.query(query, [id], (err, res) => {
                if (err) {
                   return reject(err)
                }
               return resolve(res)
            })
            
        } catch (error) {

            return res.status(500).json(error)
            
        }
    })
}


export const getDealerIndexService = () => {
    return new Promise((resolve, reject) =>{
        try {
            const query = 'SELECT * FROM dealers'
            connection.query(query, (err, res) => {
                if (err) {
                   return reject(err)
                }
               return resolve(res)
            })
            
        } catch (error) {
            return res.status(500).json(error)
            
        }
    })
}

export const getDealerService = (id) => {
    return new Promise((resolve, reject) => {
        try {
            const query = 'SELECT * FROM dealers WHERE id = ?'
            connection.query(query, [id], (err, res) => {
                if (err) {
                   return reject(err)
                }
               return resolve(res)
            })
            
        } catch (error) {
            return res.status(500).json(error)
            
        }
    })
}

export const registerService = (nombre, apellido, fecha_nacimiento, cedula, correo, usuario, hashedPassword) => {
    return new Promise((resolve, reject) =>{
        try {
            const query = 'INSERT INTO usuarios (nombre, apellido, fecha_nacimiento, cedula, correo) VALUES (?, ?, ?, ?, ?)'
            const query2 = `INSERT INTO cuentas (usuario, clave, rol) VALUES (?, ?, 'vendedor')`
            connection.query(query, [nombre, apellido, fecha_nacimiento, cedula, correo], (err, res) => {
                if (err) {
                   return reject(err)}
            })
            connection.query(query2, [usuario, hashedPassword], (err, res) => {
                if (err) {
                }
               return resolve(res)
            })
        } catch (error) {
            
        }
    })
}