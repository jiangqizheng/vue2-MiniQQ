import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import getters from './getters'
import actions from './actions'
// 注册vuex
Vue.use(Vuex)

// 初始化一些常用数据，根据vue的理念，使用到的数据都必须先进行初始化设置。
let state = {
  // 对话框
  dialog: false,
  // 侧边栏
  sidebar: {
    open: false,
    docked: true
  },
  // 用户主页
  personindex: false,
  // 搜索框
  search: false,
  // 导航栏标题
  headerTitle: 'Message',
  // 初始化基础数据
  data: { self: {}, friends: [] },
  // ajax请求数据是否结束
  isAjax: false,
  // 当前被选中或者在聊天中的friend的_id
  activeId: 0,
  // 聊天队列，这里为每个朋友添加了一个聊天队列，偷懒写法，如果有需要可以改成动态添加
  // _id是作为聊天队列的标记，list是聊天内容，list里的数据格式{_id:xx, message:xxx},组件内会根据_id来将对话插入
  // 到左边，还是右边，判断message是自己还是ai发出的
  messageList: [
    {
      _id: 1,
      list: [{ _id: 1, message: '你可以和我聊天', time: '4:28' }]
    }, {
      _id: 2,
      list: [{ _id: 2, message: '我会讲笑话哦', time: '9:50' }]
    }, {
      _id: 3,
      list: [{ _id: 3, message: '请问你要来点兔子吗', time: '3:12' }]
    }
  ],
  // 消息队列副本，由于没有数据库，所以采用这样折中的方法
  messageListFB: [
    {
      _id: 1,
      list: [{ _id: 1, message: '你可以和我聊天', time: '4:28' }]
    }, {
      _id: 2,
      list: [{ _id: 2, message: '我会讲笑话哦', time: '9:50' }]
    }, {
      _id: 3,
      list: [{ _id: 3, message: '请问你要来点兔子吗', time: '3:12' }]
    }
  ]
}

// 导出一个新生成的Store对象
export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
