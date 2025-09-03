import Joi from "joi";




const loginSchema = (schema) => (payload) => 
    schema.validate(payload, { abortEarly: false });


const schema = Joi.object({
    usuario: Joi.string().required(). min(3).messages({
        'string.min': 'El usuario debe tener al menos {#limit} caracteres',
        'any.required': 'El usuario es requerido',
    }),
    clave: Joi.string().required(). min(4).messages({
        'string.min': 'La clave debe tener al menos {#limit} caracteres',
        'any.required': 'La clave es obligatoria',
    }),
})

export default loginSchema(schema)