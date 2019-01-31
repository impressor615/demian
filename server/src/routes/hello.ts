import * as express from 'express';

export default (router: express.Router): void => {
  router.get('/', (req: express.Request, res: express.Response) => {
    res.send('Hello World');
  });
}