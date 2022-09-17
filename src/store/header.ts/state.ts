import { AsideName } from "@/common/enum.type";

export const state = {
  // 검색인풋 활성화
  isSearchMode: false,
  // 검색 키워드
  keyword: "",
  //aside
  asideName: AsideName.CHAT,
};

export type stateType = typeof state;
