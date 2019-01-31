import * as express from "express";
import * as bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.json());
app.get('/', (req:express.Request, res: express.Response) => {
  res.send('Hello World');
});

export default app;
