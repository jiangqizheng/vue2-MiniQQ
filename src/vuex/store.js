import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import getters from './getters'
import actions from './actions'
// 注册vuex
Vue.use(Vuex)

let state = {
  // 对话框是否展开
  dialog: false
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
