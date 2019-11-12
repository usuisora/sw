import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  theme: {
    themes: {
      primary: '#06f',
      secondary: '#212121'
    },
  },
  render: h => h(App)
}).$mount('#app')
