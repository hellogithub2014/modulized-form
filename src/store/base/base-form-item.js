import Vue from 'vue';

export default {
  getters: {
    isVisible ( state ) {
      return !state._hidden;
    },
  },
  mutations: {
    toggleVisible ( state, hideFunc = () => false ) {
      if ( hideFunc() )
      {
        Vue.set( state, '_hidden', true );
      } else
      {
        Vue.set( state, '_hidden', false );
      }
    },
    update ( state, newState ) {
      Object.keys( newState ).forEach( key => {
        state[ key ] = newState[ key ];
      } )
    },
  },
}