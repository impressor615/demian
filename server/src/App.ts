import * as bodyParser from "body-parser";
import * as compression from "compression";
import * as express from "express";

import pagination from "./middlewares/pagination";
import parseLanguage from "./middlewares/parseLanguage";
import routes from "./routes";

class App {
  public app: express.Application;
  public router: express.Router;

  constructor() {
    this.app = express();
    this.router = express.Router();
    this.setupMiddlewares();
    this.routes();
  }

  private setupMiddlewares() {
    this.app.use(bodyParser.json());
    this.app.use(compression());
    this.app.use(pagination);
    this.app.use(parseLanguage);
  }

  private routes() {
    this.app.use("/", routes(this.router));
  }
}

export default App;
