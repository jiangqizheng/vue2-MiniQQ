import Vue from 'vue'
import Router from 'vue-router'
// 注册router组件
Vue.use(Router)
// 导入组件
import message from '../components/message/message.vue'
import friend from '../components/friend/friend.vue'
import self from '../components/self/self.vue'

let routes = [
  {path: '/message', name: 'message', component: message},
  {path: '/friend', name: 'friend', component: friend},
  {path: '/self', name: 'self', component: self}
]

export default new Router({
  routes
})
