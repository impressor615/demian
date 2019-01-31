import * as express from "express";
import * as bodyParser from 'body-parser';
import * as compression from 'compression';

import routes from './routes';

class App {
  public app: express.Application;
  public router: express.Router;

  constructor() {
    this.app = express();
    this.router = express.Router();
    this.setupMiddlewares();
    this.routes();
  }

  setupMiddlewares() {
    this.app.use(bodyParser.json());
    this.app.use(compression());
  }

  routes() {
    this.app.use('/', routes(this.router));
  }
}

export default App;
