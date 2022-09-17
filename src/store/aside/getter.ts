import { stateType } from "./state";

export const getters = {
  keyword: (state: stateType) => {
    return state.keyword;
  },
};
