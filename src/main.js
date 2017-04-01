// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import axios from 'axios'
import App from './App'
import router from './router/index'
import store from './vuex/store'
import MuseUi from './muse-ui.config'
// import './common/stylus/base.styl'
Vue.use(MuseUi)

// 懒加载模块,由于暂时没有几张图，主要为后续使用做准备，使用方法见https://github.com/hilongjw/vue-lazyload
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: 'static/images/lazy.jpg',
  loading: 'static/images/lazy.jpg',
  attempt: 1,
  listenEvents: ['scroll']
})

// 在vue原型中添加$http方法等于axios
Vue.prototype.$http = axios
// 设置默认打开的页面
router.replace('message')

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  // 注入路由
  router,
  // 注入vuex的store
  store,
  components: { App },
  // 组件创建前，进行异步数据数据请求
  beforeCreate() {
    this.$store.dispatch('getAllData', this)
  }
})
