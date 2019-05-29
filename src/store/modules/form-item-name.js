export default {
  state: {
    name: '',
  },
  getters: {
    formItemData ( state, getters, rootState ) {
      return {
        b: state.name
      };
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
        name: formData.b
      } )
    }
  }
}