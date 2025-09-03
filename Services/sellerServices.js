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