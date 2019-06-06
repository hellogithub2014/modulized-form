export default {
  namespaced: true,
  state: {
    name: '',
    count: 0,
  },
  getters: {
    formItemData ( state ) {
      return {
        name: state.name
      };
    },
  },
  mutations: {
    addCount ( state ) {
      state.count = state.count + 1;
    },
  },
  actions: {
    data2State ( { commit }, formData ) {
      commit( 'update', {
        name: formData.name
      } )
    },
  }
}