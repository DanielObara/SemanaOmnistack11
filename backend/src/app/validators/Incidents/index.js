const { celebrate, Segments, Joi } = require('celebrate')

export const store = () => {
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      title: Joi.string().min(3).required(),
      description: Joi.string().min(10).required(),
      value: Joi.number().required(),
    }),
    [Segments.HEADERS]: Joi.object({
      authorization: Joi.string().required(),
    }).unknown(),
  })
}

export const get = () => {
  celebrate({
    [Segments.QUERY]: Joi.object().keys({
      page: Joi.number(),
    }),
  })
}

export const show = () => {
  celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      id: Joi.string().required(),
    }),
  })
}

export const del = () => {
  celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      id: Joi.number().required(),
    }),
  })
}
