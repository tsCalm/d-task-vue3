import { stateType } from "./state";

export const mutations = {
  SET_CHAT_KEYWORD(state: stateType, keyword: string) {
    state.keyword = keyword;
  },
};
