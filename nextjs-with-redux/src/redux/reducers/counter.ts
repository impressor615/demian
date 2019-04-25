import { DECREMENT, INCREMENT } from "@/src/constants/actionTypes";
import { AnyAction, Reducer } from "redux";

export interface ICounterStates {
  count: number;
}

const initialState = {
  count: 0,
};

const counterReducer: Reducer<
  ICounterStates,
  AnyAction
> = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
    case DECREMENT:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default counterReducer;
