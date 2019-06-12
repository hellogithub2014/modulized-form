import Vue from 'vue';
import Vuex from 'vuex';
import modules from './modules';
import createSyncPlugin from './base/sync-module-plugin';

Vue.use( Vuex );

const store = new Vuex.Store( {
  modules,
  plugins: [ createSyncPlugin( 'demo' ) ],
} );
export default store;