import * as chai from 'chai';
import chaiHttp = require('chai-http');

import app from '../src/app';


chai.should();
chai.use(chaiHttp);
(global as any).app = app;
