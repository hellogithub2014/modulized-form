export default {
  namespaced: true,
  state: {
    text: '',
  },
  getters: {
    formItemData ( state, getters, rootState ) {
      return state;
    },
  },
  mutations: {
    update ( state, newState ) {
      state = {
        ...state,
        ...newState,
      };
    },
  },
  actions: {
    data2State: {
      handler ( { state, commit, rootState }, formData ) {
        commit( 'update', {
          text: formData.d
        } )
      },
      root: true,
    }
  }
}