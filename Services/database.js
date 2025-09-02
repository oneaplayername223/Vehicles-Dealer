import mysql from 'mysql'
import colors from 'colors'

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'bd_dealer'
})
connection.connect((error) => {
    if (error) {
        return console.log(error.message. bgRed);
    }
    console.log('Base de datos conectada exitosamente'.bgGreen);
})

export default connection