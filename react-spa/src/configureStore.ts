import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";

import reducers from "@/reducers";

const middlewares = [logger];
export default () => createStore(reducers, {}, applyMiddleware(...middlewares));
