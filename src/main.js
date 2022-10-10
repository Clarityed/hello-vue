import Vue from 'vue'
import App from './App'
import router from "./router"
// 导入饿了吗提供的组件和样式
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// vue-axios
import axios from 'axios'
import VueAxios from 'vue-axios'

// 使用外部组件
Vue.use(router);
Vue.use(ElementUI);
Vue.use(VueAxios, axios)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render:h=>h(App)
})
