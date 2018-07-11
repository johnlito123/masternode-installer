import Vue from 'vue';
import axios from 'axios';
import vmodal from 'vue-js-modal';

import App from './App';
import router from './router';
import store from './store';

if (!process.env.IS_WEB) Vue.use(require('vue-electron'));
Vue.http = Vue.prototype.$http = axios;
Vue.config.productionTip = false;

const config = {
  apiKey: 'AIzaSyCccSMWaKOVy9p4OADhgoiPmVXRPNn65mk',
  authDomain: 'gravium-mninstaller.firebaseapp.com',
  databaseURL: 'https://gravium-mninstaller.firebaseio.com',
  projectId: 'gravium-mninstaller',
  storageBucket: 'gravium-mninstaller.appspot.com',
  messagingSenderId: '505795540851',
};
window.firebase.initializeApp(config);

Vue.use(vmodal, { dialog: true });

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>',
}).$mount('#app');
