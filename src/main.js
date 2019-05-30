import Vue from 'vue';
import BytedVui from 'byted-vui';
import 'byted-vui/lib/theme-chalk/index.css';
import App from './App.vue';
import store from './store';

Vue.use( BytedVui );
Vue.config.productionTip = false;

new Vue( {
  store,
  render: h => h( App ),
} ).$mount( '#app' );
