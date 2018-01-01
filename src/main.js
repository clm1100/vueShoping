import Vue from 'vue'
import App from './App'
import router from './router'
import VueCookie from'vue-cookie'
import Store from 'store'

// Tell Vue to use the plugin 
Vue.prototype.$sstore = Store
Vue.config.productionTip = false
import axios from 'axios'
import VueAxios from 'vue-axios'
import iView from 'iview';
import store from './store';
import 'iview/dist/styles/iview.css';
Vue.use(VueCookie);
Vue.use(VueAxios, axios)
Vue.use(iView);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
