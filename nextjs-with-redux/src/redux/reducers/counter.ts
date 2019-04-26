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
      return {
        ...state,
        count: state.count + 1,
      };
    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      return state;
  }
};

export default counterReducer;
