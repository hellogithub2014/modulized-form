import Vue from 'vue';
import Vuex from 'vuex';
import modules from './modules';

Vue.use( Vuex );

const fillPlugin = store => {
  store.subscribe( ( mutation ) => {
    const { type = '' } = mutation;
    if ( type.endsWith( '/update' ) )
    {
      store.dispatch( 'fillForm', store.getters.formData );
    }
  } );
};

const store = new Vuex.Store( {
  getters: {
    // 用于表单校验
    formModel ( state, getters ) {
      return Object.keys( modules ).reduce( ( result, moduleKey ) => {
        return {
          ...result,
          [ moduleKey ]: state[ moduleKey ]
        };
      }, {} );
    },
    // 用于后端接口
    formData ( state, getters ) {
      return Object.keys( modules ).reduce( ( result, moduleKey ) => {
        return {
          ...result,
          ...getters[ `${ moduleKey }/formItemData` ]
        };
      }, {} );
    },
  },
  modules,
  actions: {
    fillForm ( { dispatch, commit, getters }, backendData ) {
      dispatch( 'data2State', backendData );
    },
  },
  // plugins: [ fillPlugin ],
} );

export default store;