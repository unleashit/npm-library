import { NextFunction, Request, Response } from 'express';

export interface MessageResponse {
  message: string;
}

interface ErrorResponse extends MessageResponse {
  stack?: string;
  status: number;
}

export function notFound(req: Request, res: Response, next: NextFunction) {
  res.status(404);
  const error = new Error(`404 Not Found - ${req.originalUrl}`);
  next(error);
}

export function errorHandler(
  err: Error,
  _req: Request,
  res: Response<ErrorResponse>,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _next: NextFunction,
) {
  console.error(err);
  const statusCode = res.statusCode ? res.statusCode : 500;
  res.status(statusCode);
  res.json({
    message: err.message,
    status: res.statusCode,
    stack: process.env.NODE_ENV === 'production' ? undefined : err.stack,
  });
}
