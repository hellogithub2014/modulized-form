export default {
  namespaced: true,
  state: {
    text: '',
  },
  getters: {
    formItemData ( state, getters, rootState ) {
      return {
        d: state.text,
      };
    },
  },
  mutations: {
    update ( state, newState ) {
      Object.keys( newState ).forEach( key => {
        state[ key ] = newState[ key ];
      } )
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