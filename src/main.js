import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
import vueResource from 'vue-resource';

Vue.use(vueResource)

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
