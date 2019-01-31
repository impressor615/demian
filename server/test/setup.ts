import * as chai from "chai";
import chaiHttp = require("chai-http");
import * as spies from "chai-spies";

import App from "../src/app";
import { ERRORS } from "../src/constants";

chai.should();
chai.use(chaiHttp);
chai.use(spies);
(global as any).app = new App().app;
(global as any).errors = ERRORS;
