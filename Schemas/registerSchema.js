import Joi from "joi";


const registerSchema = (schema) => (payload) => 
    schema.validate(payload, { abortEarly: false });

const schema = Joi.object({
    nombre: Joi.string().required(). min(3).messages({
        'string.min': 'El nombre debe tener al menos {#limit} caracteres',
        'any.required': 'El nombre es requerido',
    }),
    apellido: Joi.string().required(). min(3).messages({
        'string.min': 'El apellido debe tener al menos {#limit} caracteres',
        'any.required': 'El apellido es requerido',
    }),
    fecha_nacimiento: Joi.string().required(). min(3).messages({
        'string.min': 'La fecha de nacimiento debe tener al menos {#limit} caracteres',
        'any.required': 'La fecha de nacimiento es requerida',
    }),
    cedula: Joi.string().required(). min(3).messages({
        'string.min': 'La cedula debe tener al menos {#limit} caracteres',
        'any.required': 'La cedula es requerida',
    }),
    correo: Joi.string().required(). min(3).messages({
        'string.min': 'El correo debe tener al menos {#limit} caracteres',
        'any.required': 'El correo es requerido',
    }),
    usuario: Joi.string().required(). min(3).messages({
        'string.min': 'El usuario debe tener al menos {#limit} caracteres',
        'any.required': 'El usuario es requerido',
    }),
    clave: Joi.string().required(). min(4).messages({
        'string.min': 'La clave debe tener al menos {#limit} caracteres',
        'any.required': 'La clave es obligatoria',
    }),
})

export default registerSchema(schema)