import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class RequestLoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    if (req.path === '/api/prayers/shift') {
      console.log('=== MIDDLEWARE: /api/prayers/shift ===');
      console.log('Method:', req.method);
      console.log('Headers:', JSON.stringify(req.headers, null, 2));
      console.log('Body:', req.body);
      console.log('Body type:', typeof req.body);
      console.log('Body keys:', req.body ? Object.keys(req.body) : 'no body');
    }
    next();
  }
}

