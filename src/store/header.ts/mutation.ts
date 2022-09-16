import { stateType } from "./state";

export const mutations = {
  SET_SEARCH_MODE(state: stateType, onOff: boolean) {
    state.isSearchMode = onOff;
  },
};
