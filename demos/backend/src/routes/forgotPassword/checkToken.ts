import { Request, Response } from 'express';

export const checkToken = (req: Request, res: Response) => {
  const { token } = req.body;

  const validated = token === '1234567890';

  res.status(validated ? 200 : 401);
  res.json({
    success: validated,
  });
};
