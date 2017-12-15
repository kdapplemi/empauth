import { Middleware, ExpressMiddlewareInterface } from 'routing-controllers';
import { NextFunction, Request, Response } from 'express';
import * as debug from 'debug';

@Middleware({ type: 'before' })
export class CorsMiddleware implements ExpressMiddlewareInterface { // interface implementation is optional
  private logger: debug.IDebugger = debug('pick:middleware:CorsMiddleware');

  public use(req: Request, res: Response, next?: NextFunction): any {
    this.logger(`Setting Access-Control-Allow-Origin headers to ${req.get('origin')}`);
    res.header('Access-Control-Allow-Origin', `${req.get('origin')}`);
    res.header('Access-Control-Allow-Credentials', `true`);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers',
      'Content-Type, Authorization, Content-Length, X-Requested-With, Access-Control-Allow-Credentials');

    if (req.method === 'OPTIONS') {
      res.sendStatus(200);
      res.end();
    } else {
      next();
    }
  }

}