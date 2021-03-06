import Vue from 'vue'
import App from './App.vue'
import store from '@/store'
import router from "@/router";
import apolloProvider from './vue-apollo'
import Vuetify from 'vuetify';
Vue.use(Vuetify);

// Requests to our Laravel back-end
window.axios = require('axios');
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

import moment from 'moment';
moment.locale('ru');
Vue.prototype.moment = moment;

import VueCountdown from '@chenfengyuan/vue-countdown';
Vue.component(VueCountdown.name, VueCountdown);

Vue.config.productionTip = false

new Vue({
  store,
  router,
  vuetify : new Vuetify(),
  apolloProvider,
  render: h => h(App)
}).$mount('#app')
