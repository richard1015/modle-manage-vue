import Vue from 'vue'
import App from './App'
import router from './router'
import iView from 'iview';
import 'iview/dist/styles/iview.css';
// import VueResource from 'vue-resource';
// Vue.use(VueResource);
import Axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use({ Axios, VueAxios });
Vue.config.productionTip = false
    // Vue.use(VueRouter);
Vue.use(iView);
Vue.prototype.$axios = Axios;
/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})