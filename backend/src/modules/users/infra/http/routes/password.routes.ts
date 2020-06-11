import { Router } from 'express';

import ForgotPasswordControler from '../controllers/ForgotPasswordController';
import ResetPasswordControler from '../controllers/ResetPasswordController';

const passwordRouter = Router();
const forgotPasswordControler = new ForgotPasswordControler();
const resetPasswordControler = new ResetPasswordControler();

passwordRouter.post('/forgot', forgotPasswordControler.create);
passwordRouter.post('/reset', resetPasswordControler.create);

export default passwordRouter;
