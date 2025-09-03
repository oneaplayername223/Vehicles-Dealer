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
  return new Promise((resolve, reject) => {
    try {
      const queryCuentas = `INSERT INTO cuentas (usuario, clave, rol) VALUES (?, ?, 'vendedor')`;
      const queryUsuarios = 'INSERT INTO usuarios (nombre, apellido, fecha_nacimiento, cedula, correo, id_cuenta) VALUES (?, ?, ?, ?, ?, ?)';

      connection.query(queryCuentas, [usuario, hashedPassword], (err, resCuentas) => {
        if (err) return reject(err);

        const idCuenta = resCuentas.insertId;

        connection.query(queryUsuarios, [nombre, apellido, fecha_nacimiento, cedula, correo, idCuenta], (err, resUsuarios) => {
          if (err) return reject(err);

          return resolve({ cuentaId: idCuenta, usuarioId: resUsuarios.insertId });
        });
      });
    } catch (error) {
      return reject(error);
    }
  });
};
