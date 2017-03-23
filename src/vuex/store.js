import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import getters from './getters'
import actions from './actions'
// 注册vuex
Vue.use(Vuex)

let state = {
  // 对话框
  dialog: false,
  // 侧边栏
  sidebar: {
    open: false,
    docked: true
  },
  // 个人主页
  personindex: false,
  // 搜索框
  search: false
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
