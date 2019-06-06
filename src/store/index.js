import Vue from 'vue';
import Vuex from 'vuex';
import formModule from './modules/form';

Vue.use( Vuex );

const store = new Vuex.Store( formModule );
export default store;