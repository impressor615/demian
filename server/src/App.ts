import * as express from "express";
import * as bodyParser from 'body-parser';
import * as compression from 'compression';

const app = express();
app.use(bodyParser.json());
app.use(compression());
app.get('/', (req:express.Request, res: express.Response) => {
  res.send('Hello World');
});

export default app;
