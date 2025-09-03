import connection from "./database.js";

export const postAddCarService = (marca, modelo, creado, color, categoria, traccion, pasajeros, descripcion, precio, imagenes, videos, id_cuenta) => {
    return new Promise((resolve, reject) => {
    try {
        const query = 'INSERT INTO vehiculos (marca, modelo, creado_en, color, categoria, traccion, pasajeros, descripcion, precio, imagenes, videos, id_cuenta) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)'
        connection.query(query, [marca, modelo, creado, color, categoria, traccion, pasajeros, descripcion, precio, imagenes, videos, id_cuenta], (err, res) => {
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


export const postviewCarService = (id_cuenta) => {
    return new Promise((resolve, reject) =>{
        try {
          const query = 'SELECT * FROM vehiculos WHERE id_cuenta = ?'
          connection.query(query, [id_cuenta], (err, res) => {
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

export const postviewCarByIdService = (id) => {
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

export const postDeleteCarService = (id, id_cuenta) => {
    return new Promise((resolve, reject) => {
        try {
          const query = 'DELETE FROM vehiculos WHERE id = ? AND id_cuenta = ?'
          connection.query(query, [id, id_cuenta], (err, res) => {
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