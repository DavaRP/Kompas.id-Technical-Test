import Vue from "vue";
import Vuex from "vuex";
import moment from "moment";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    memos: localStorage.getItem("memos")
      ? JSON.parse(localStorage.getItem("memos"))
      : [],
    total: 0,
  },
  mutations: {
    SET_TOTAL(state, payload) {
      state.total = payload;
    },
    SET_DATA(state, payload) {
      let existing_group = state.memos.filter((x) => x.group == payload.group);
      let newData;
      if (existing_group.length == 0) {
        state.memos.push({
          group: payload.group,
          date: payload.date,
          data: [],
        });
        newData = state.memos.filter((x) => x.group == payload.group)[0];
        newData.data.push(payload);
        localStorage.setItem("memos", JSON.stringify(state.memos));
        console.log("kesini kalo blom ada data");
      } else {
        existing_group[0].data.push(payload);
        console.log(state.memos);
        localStorage.setItem("memos", JSON.stringify(state.memos));
      }
    },
  },
  actions: {
    SetTotal({ commit, state }, payload) {
      console.log(payload);
      let sum = 0;
      let group = state.memos.filter((x) => x.group == payload);
      for (let i = 0; i < group.length; i++) {
        for (let j = 0; j < group[i].data.length; j++) {
          sum += parseInt(group[i].data[j].harga);
        }
      }
      console.log(sum);
      commit("SET_TOTAL", sum);
    },
    AddData({ commit, state, dispatch }, payload) {
      payload = {
        ...payload,
        now: payload.now ? moment(payload.now).format("D MMMM") : null,
        time: moment().format("hh:mm"),
      };
      commit("SET_DATA", payload);
      dispatch("SetTotal", payload.group);
    },
  },
  modules: {},
  getters: {
    memos(state) {
      return state.memos;
    },
    total(state) {
      return state.total;
    },
  },
});
