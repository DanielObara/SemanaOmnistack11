const { celebrate, Segments, Joi } = requite('celebrate')

module.exports = {
  get (){
    celebrate({
      [Segments.QUERY]: Joi.object().keys({
        page: Joi.number(),
      }),
    })
  },

  show = () => {
    celebrate({
      [Segments.QUERY]: Joi.object().keys({
        id: Joi.string().required(),
      }),
    })
  },

  create = () => {
    celebrate({
      [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        whatsapp: Joi.string().required().min(10).max(11),
        city: Joi.string().required(),
        uf: Joi.string().required().length(2),
      }),
    })
  }
}

