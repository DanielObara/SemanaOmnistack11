import { celebrate, Segments, Joi } from 'celebrate'

export const create = () => {
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      id: Joi.string().required(),
    }),
  })
}
