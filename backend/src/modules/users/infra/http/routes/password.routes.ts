import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';

import ForgotPasswordControler from '../controllers/ForgotPasswordController';
import ResetPasswordControler from '../controllers/ResetPasswordController';

const passwordRouter = Router();
const forgotPasswordControler = new ForgotPasswordControler();
const resetPasswordControler = new ResetPasswordControler();

passwordRouter.post(
  '/forgot',
  celebrate({
    [Segments.BODY]: {
      email: Joi.string().email().required(),
    },
  }),
  forgotPasswordControler.create,
);
passwordRouter.post(
  '/reset',
  celebrate({
    [Segments.BODY]: {
      token: Joi.string().uuid().required(),
      password: Joi.string().required(),
      password_confirmation: Joi.string().required().valid(Joi.ref('password')),
    },
  }),
  resetPasswordControler.create,
);

export default passwordRouter;
