import {
  applyMiddleware,
  combineReducers,
  createStore,
} from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import { __NEXT_REDUX_STORE__  } from "@/src/constants/global";
import counterReducer, { ICounterStates } from "./reducers/counter";

interface IReduxStates {
  counter: ICounterStates;
}

const initialStates: IReduxStates = {
  counter: {
    count: 0,
  },
};

const initializeStore = (states = initialStates) => (
  createStore(
    combineReducers({ counter: counterReducer }),
    states,
    composeWithDevTools(applyMiddleware()),
  )
);

export default (states: IReduxStates = initialStates) => {
  const isServer = typeof window === "undefined";
  if (isServer) {
    return initializeStore(states);
  }

  if (!window[__NEXT_REDUX_STORE__]) {
    window[__NEXT_REDUX_STORE__] = initializeStore(states);
  }

  return window[__NEXT_REDUX_STORE__];
};
