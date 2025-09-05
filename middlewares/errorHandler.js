export const errorHandler = (error, req, res, next) => {
    console.log('ErrorHandler')
    console.error(error.message);
    return res.status(500).json({Mensaje: 'Ha habido un error en el servidor'})
}