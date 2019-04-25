import {
  applyMiddleware,
  combineReducers,
  createStore,
} from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import counterReducer, { ICounterStates } from "./reducers/counter";

interface IReduxStates {
  counter: ICounterStates;
}

const initialStates: IReduxStates = {
  counter: {
    count: 0,
  },
};

export default () => (
  createStore(
    combineReducers({ counter: counterReducer }),
    initialStates,
    composeWithDevTools(applyMiddleware()),
  )
);
