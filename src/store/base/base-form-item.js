import Vue from 'vue';

export default {
  state () {
    return {
      _formState: {},
      _formNamespace: '',
      _formGroupState: {},
      _formGroupNamespace: '',
    }
  },
  getters: {
    formState ( state ) {
      return state._formState;
    },
    formGroupState ( state ) {
      return state._formGroupState;
    },
    formNamespace ( state ) {
      return state._formNamespace;
    },
    formGroupNamespace ( state ) {
      return state._formGroupNamespace;
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
    saveFormNamespace ( state, formNamespace ) {
      Vue.set( state, '_formNamespace', formNamespace );
    },
    saveFormGroupState ( state, formGroupState ) {
      Vue.set( state, '_formGroupState', formGroupState );
    },
    saveFormGroupNamespace ( state, formGroupNamespace ) {
      Vue.set( state, '_formGroupNamespace', formGroupNamespace );
    },
  },
}