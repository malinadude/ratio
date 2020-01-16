import Vue from 'vue';
import Clipboard from 'v-clipboard';
import store from './store';
import App from './App';
import router from './router';

Vue.use(Clipboard);

Vue.config.productionTip = false;

// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>',
});
