export default {
  state: {
    desc: ''
  },
  getters: {
    formItemData ( state, getters, rootState ) {
      return {
        c: state.desc
      };
    },
    hidden ( state, getters, rootState ) {
      return rootState.formData.a === 10;
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
        desc: formData.c
      } )
    }
  }
}