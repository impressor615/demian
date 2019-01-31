import * as chai from "chai";
import chaiHttp = require("chai-http");
import * as spies from "chai-spies";

import App from "@/App";
import { ERRORS } from "@/constants";

chai.should();
chai.use(chaiHttp);
chai.use(spies);
(global as any).app = new App().app;
(global as any).errors = ERRORS;
