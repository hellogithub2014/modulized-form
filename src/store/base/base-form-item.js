import Vue from 'vue';

export default {
  getters: {
    isVisible ( state ) {
      return !state._hidden;
    },
  },
  mutations: {
    hide ( state ) {
      Vue.set( state, '_hidden', true );
    },
    show ( state ) {
      Vue.set( state, '_hidden', false );
    },
    update ( state, newState ) {
      Object.keys( newState ).forEach( key => {
        state[ key ] = newState[ key ];
      } )
    },
  },
}