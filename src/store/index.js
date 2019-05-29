import Vue from 'vue';
import Vuex from 'vuex';
import modules from './modules';
// import state from './state';
// import actions from './actions';
// import mutations from './mutations';
Vue.use( Vuex );


const store = new Vuex.Store( {
  // state,
  // mutations,
  getters: {
    formData ( state, getters ) {
      Object.keys( modules ).reduce( ( result, moduleKey ) => {
        return {
          ...result,
          ...getters[ moduleKey ]
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
  // plugins: [ vuexLocal.plugin ],
} );

export default store;