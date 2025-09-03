import Joi from "joi";


const idSchema = (schema) => (payload) => 
    schema.validate(payload, { abortEarly: false });

const schema = Joi.object({
    id: Joi.number(). min(1).messages({
        'string.min': 'El id debe tener al menos {#limit} caracteres',
        'any.required': 'El id es requerido',
    }),
    id_cuenta: Joi.number(). min(1).messages({
        'string.min': 'El id de la cuenta debe tener al menos {#limit} caracteres',
        'any.required': 'El id de la cuenta es requerido',
    }),
})

export default idSchema(schema)