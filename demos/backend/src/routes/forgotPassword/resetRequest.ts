import { Request, Response } from 'express';
import { validator } from '../../helpers';
import { validateResetRequest, ResetRequestPostBody } from './validations';
import { email } from '../../email';

export const resetRequest = (req: Request, res: Response) => {
  const { errors, valid } = validator<ResetRequestPostBody>(
    validateResetRequest,
    req.body,
  );

  if (!valid) {
    res.status(400).json({
      success: false,
      errors,
    });
    return;
  }

  // Fake non-user
  if (req.body.email === 'non@user.com') {
    res.status(401).json({
      success: false,
      errors: {
        root: 'Do you have an account with us with a different email?',
        email: 'User not found',
      },
    });
    return;
  }

  // Don't actually send an email to the fake address used by the automated demo
  if (req.body.email === 'example@example.com') {
    res.json({
      success: valid,
      errors,
    });
    return;
  }

  const userId = '1';
  const token = '1234567890';
  const baseUrl = process.env.BASE_URL;
  const url = `${baseUrl}/forgot-password/${userId}/${token}`;
  // const url = `${baseUrl}/?path=/story/forgot-password--basic&userId=${userId}&token=${token}`;
  const opts = {
    to: req.body.email,
    subject: 'Reset your password: NPM library demo',
    html: `To reset your password, visit the following link: <br><br><a href="${url}">${url}</a>`,
  };

  email(opts)
    .then(() =>
      res.json({
        success: valid,
        errors,
      }),
    )
    .catch((err) => {
      console.error(err);

      res.status(500).json({ success: false, errors: 'server error' });
    });
};
