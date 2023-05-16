import Joi from 'joi';

const fileValidation = Joi.array().items(Joi.object({
  product_code: Joi.string().required(),
  new_price: Joi.string().required()
}));

export default fileValidation;
