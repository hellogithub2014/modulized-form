export default {
  namespaced: true,
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
      Object.keys( newState ).forEach( key => {
        state[ key ] = newState[ key ];
      } )
    },
  },
  actions: {
    data2State: {
      handler ( { state, commit, rootState }, formData ) {
        commit( 'update', {
          id: formData.a,
          name: formData.b
        } )
      },
      root: true,
    },
  }
}