import { AsideName } from "@/common/enum.type";
import { stateType } from "./state";

export const mutations = {
  SET_SEARCH_MODE(state: stateType, onOff: boolean) {
    state.isSearchMode = onOff;
  },
  SET_SEARCH_KEYWORD(state: stateType, keyword: string) {
    state.keyword = keyword;
  },
  SET_CURRENT_ASIDE(state: stateType, asideName: AsideName) {
    state.asideName = asideName;
  },
};
