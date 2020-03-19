// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import store from './store'
import axios from 'axios'
import qs from 'qs'
import echarts from 'echarts'
import html2canvas from 'html2canvas'
import jsPdf from 'jspdf'
Vue.use(ElementUI)
Vue.use(Vuex)
Vue.config.productionTip = false
/* eslint-disable no-new */
// 一些默认的参数
Vue.prototype.$echarts = echarts
Vue.prototype.$axios = axios
Vue.prototype.html2canvas = html2canvas
Vue.prototype.jsPdf = jsPdf
// axios.defaults.baseURL = 'https://www.jiandaohealth.com/DHT/'
axios.defaults.withCredentials = false
axios.defaults.headers.post['Content-Type'] ='application/json';
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})


