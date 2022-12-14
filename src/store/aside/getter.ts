import { stateType } from "./state";

export const getters = {
  keyword: (state: stateType) => {
    return state.keyword;
  },
  searchCount: (state: stateType) => {
    return state.searchCount;
  },
  searchList: (state: stateType) => {
    return state.searchList;
  },
  todayAlarm: (state: stateType) => {
    return state.todayAlarm;
  },
  previousAlarm: (state: stateType) => {
    return state.previousAlarm;
  },
};
