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
  modules,
  // actions,
  // plugins: [ vuexLocal.plugin ],
} );

export default store;