import Joi from 'joi';

const productSchema = Joi.object({
  title: Joi.string().min(3).max(100).required(),
  description: Joi.string().allow('').max(500),
  code: Joi.string().alphanum().min(3).max(20).required(),
  price: Joi.number().positive().required(),
  status: Joi.boolean().optional(),
  stock: Joi.number().integer().min(0).required(),
  category: Joi.string().required(),
  thumbnails: Joi.array().items(Joi.string().uri()).optional()
});

export function validateProduct(req, res, next) {
  const { error } = productSchema.validate(req.body);
  if (error) {
    return res.status(400).json({
      status: 'error',
      message: 'Validación fallida',
      details: error.details.map(d => d.message)
    });
  }
  next();
}
