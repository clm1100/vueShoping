import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false
import axios from 'axios'
import VueAxios from 'vue-axios'
import iView from 'iview';
import store from './store';
import 'iview/dist/styles/iview.css';

Vue.use(VueAxios, axios)
Vue.use(iView);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
