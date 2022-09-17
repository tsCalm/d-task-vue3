import { actions } from "./action";
import { state } from "./state";
import { mutations } from "./mutation";
import { getters } from "./getter";

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters,
};
