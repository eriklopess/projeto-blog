import Joi from 'joi';

export default Joi.object({
  email: Joi.string().email().required().messages({
    'string.email': '400|Email is not valid',
    'any.required': '400|Email is required',
  }),
  password: Joi.string().min(6).required().messages({
    'string.min': '422|Password must be longer than 6 characters',
    'any.required': '400|Password is required',
  }),
});
