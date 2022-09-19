import { AsideName } from "@/common/enum.type";

export const actions = {
  search({ commit }: any, keyword: string) {
    console.log("search!! , ->>", keyword);
    commit("SET_CURRENT_ASIDE", AsideName.SEARCH);
  },
};
