import Vue from 'vue';

export default {
  state () {
    return {
      _formState: {},
      _formGroupState: {},
    }
  },
  getters: {
    formState ( state ) {
      return state._formState;
    },
    formGroupState ( state ) {
      return state._formGroupState;
    },
    // 自身是否可见
    isSelfVisible ( state, getters ) {
      const target = getters.isVisible;
      if ( target === undefined )
      {
        return true;
      }
      return !!target;
    },
  },
  mutations: {
    update ( state, newState ) {
      Object.keys( newState ).forEach( key => {
        state[ key ] = newState[ key ];
      } )
    },
    saveFormState ( state, formState ) {
      Vue.set( state, '_formState', formState );
    },
    saveFormGroupState ( state, formGroupState ) {
      Vue.set( state, '_formGroupState', formGroupState );
    },
  },
}