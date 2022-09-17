import { createStore } from "vuex";
import HeaderModule from "./header";
import AsideModule from "./aside";
export default createStore({
  modules: {
    header: { ...HeaderModule },
    aside: { ...AsideModule },
  },
});
