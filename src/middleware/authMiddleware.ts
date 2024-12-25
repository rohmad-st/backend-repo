import { Request, Response, NextFunction } from 'express';

export const authMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const token = req.headers.authorization;
  if (!token) {
    res.status(403).json({ error: 'Unauthorized' });
    return;
  }

  // Add token validation logic here (Firebase Authentication or custom validation)

  next();
};
