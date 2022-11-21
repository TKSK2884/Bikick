import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    myMarkArray: {},
    myMark: {},
    myNumber: 1325967,
  },
  getters: {
    getMyNumber(state) {
      return state.myNumber;
    },
    getMyMark(state) {
      return state.myMark;
    },
  },
  mutations: {
    setMyNumber(state, value) {
      return (state.myNumber = value);
    },
    setMyMark(state, value) {
      return (state.myMark = value);
    },
    // setMyMarkArray(state, value) {
    //   //for (let i: number = 0; i < value.length; i++) {
    //   return (state.myMarkArray = value);
    //   //}
  },
});
