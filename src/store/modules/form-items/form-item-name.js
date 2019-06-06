export default {
  namespaced: true,
  state: {
    name: '',
  },
  getters: {
    formItemData ( state, getters, rootState ) {
      return {
        b: state.name
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
    data2State ( { state, commit, rootState }, formData ) {
      commit( 'update', {
        name: formData.b
      } )
    },
  }
}