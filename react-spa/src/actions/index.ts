import {
  CHANGE_COMPILER,
  CHANGE_FRAMEWORK,
} from "@/constants";

export const changeCompiler = (): BaseAction => {
  return { type: CHANGE_COMPILER };
};

export const changeFramework = (): BaseAction => {
  return { type: CHANGE_FRAMEWORK };
};
