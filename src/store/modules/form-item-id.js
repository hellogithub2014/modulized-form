export default {
  state: {
    id: '',
    name: '',
  },
  getters: {
    formItemData ( state, getters, rootState ) {
      return {
        a: +state.id
      };
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
    data2State ( { state, commit, rootState }, formData ) {
      commit( 'update', {
        id: formData.a,
        name: formData.b
      } )
    }
  }
}