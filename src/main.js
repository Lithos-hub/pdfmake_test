import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
pdfMake.vfs = pdfFonts.pdfMake.vfs;

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  pdfMake,
  pdfFonts,
  render: h => h(App)
}).$mount('#app')
