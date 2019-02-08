import { CHANGE_COMPILER, CHANGE_FRAMEWORK } from "@/constants";

const initialState = {
  compiler: "TypeScript",
  framework: "React",
};

export default function(state: HelloState = initialState, action: BaseAction) {
  switch (action.type) {
    case CHANGE_COMPILER:
      return {
        ...state,
        compiler: action.payload,
      };

    case CHANGE_FRAMEWORK:
      return {
        ...state,
        framework: action.payload,
      };

    default:
      return state;
  }
}
