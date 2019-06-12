export default {
  getters: {
    isVisible ( state, getters, rootState, rootGetters ) {
      // TODO: rootGetters.demo
      // return rootGetters.isFormItemVisible( state._moduleKey );
      return true;
    },
  },
  mutations: {
    update ( state, newState ) {
      Object.keys( newState ).forEach( key => {
        state[ key ] = newState[ key ];
      } )
    },
  },
}