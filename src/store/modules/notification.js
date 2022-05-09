import mutations from "../mutations";
const { SHOW_TOAST_NOTIFY } = mutations;
const notificaionStore = {
  state: {
    messagePool: [],
  },
  getters: {
    messagePool: ({ messagePool }) => messagePool[messagePool.length - 1],
  },
  mutations: {
    [SHOW_TOAST_NOTIFY](state, msg) {
      state.messagePool.push(msg);
    },
  },
  actions: {
    showNotify({ commit }, msg) {
      commit("SHOW_TOAST_NOTIFY", msg);
    },
  },
};

export default notificaionStore;
