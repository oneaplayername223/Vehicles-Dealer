import Joi from "joi";



const vehicleSchema = (schema) => (payload) => 
    schema.validate(payload, { abortEarly: false });



const schema = Joi.object({
    marca: Joi.string().required(). min(3).messages({
        'string.min': 'La marca debe tener al menos {#limit} caracteres',
        'any.required': 'La marca es requerida',
    }),
    modelo: Joi.string().required(). min(3).messages({
        'string.min': 'El modelo debe tener al menos {#limit} caracteres',
        'any.required': 'El modelo es requerido',
    }),
    creado: Joi.string().required(). min(4).max(4).messages({
        'string.min': 'El año debe tener al menos {#limit} caracteres',
        'string.max': 'El año debe tener maximo {#limit} caracteres',
        'any.required': 'El año es requerido',
    }),
    color: Joi.string().required(). min(3).messages({
        'string.min': 'El color debe tener al menos {#limit} caracteres',
        'any.required': 'El color es requerido',
    }),
    categoria: Joi.string().required(). min(3).messages({
        'string.min': 'La categoria debe tener al menos {#limit} caracteres',
        'any.required': 'La categoria es requerida',
    }),
    traccion: Joi.string().required(). min(3).messages({
        'string.min': 'La traccion debe tener al menos {#limit} caracteres',
        'any.required': 'La traccion es requerida',
    }),
    pasajeros: Joi.number().required(). min(3).messages({
        'string.min': 'Los pasajeros debe tener al menos {#limit} caracteres',
        'any.required': 'el numero de pasajeros es requerido',
    }),
    descripcion: Joi.string().required(). min(5).messages({
        'string.min': 'La descripcion debe tener al menos {#limit} caracteres',
        'any.required': 'La descripcion es requerida',
    }),
    precio: Joi.number().required(). min(4).messages({
        'string.min': 'El precio debe tener al menos {#limit} caracteres',
        'any.required': 'El precio es requerido',
    }),
    imagenes: Joi.array().required(). min(1).messages({
        'string.min': 'Las imagenes deben tener al menos {#limit} caracteres',
        'any.required': 'Las imagenes son requeridas',
    }),
    videos: Joi.array().required(). min(1).messages({
        'string.min': 'Los videos deben tener al menos {#limit} caracteres',
        'any.required': 'Los videos son requeridos',
    }),
})


export default vehicleSchema(schema)