import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: 'mdi',

  },
  theme: {
    themes: {
      primary: '#06f',
      secondary: '#212121'
    },
  }
}
);
