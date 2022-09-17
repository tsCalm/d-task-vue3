import { stateType } from "./state";

export const getters = {
  isSearchMode: (state: stateType) => {
    return state.isSearchMode;
  },
  keyword: (state: stateType) => {
    return state.keyword;
  },
};
