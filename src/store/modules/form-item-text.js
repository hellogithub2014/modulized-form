export default {
  state: {
    text: '',
  },
  getters: {
    formItemData ( state, getters, rootState ) {
      return state;
    },
    hidden ( state, getters, rootState ) {
      return false;
    }
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
    data2State ( { state, commit, rootState }, formData ) {
      commit( 'update', {
        text: formData.d
      } )
    }
  }
}