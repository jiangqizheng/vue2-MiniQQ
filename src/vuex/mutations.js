// vuex中state的数据只能被mutations方法所更改

const mutations = {
  // 对话
  showDialog: (state) => {
    state.dialog = !state.dialog
  },
  // 侧边栏
  showSidebar: (state, { flag } = {}) => {
    state.sidebar.open = !state.sidebar.open
    state.sidebar.docked = !flag
  },
  // 个人主页
  showPersonindex: (state) => {
    state.personindex = !state.personindex
  },
  // 搜索
  showSearch: (state) => {
    state.search = !state.search
  },
  getData: (state, data) => {
  // 将ajax获取到的值赋予state
    state.data = data
  },
  // 标题
  changTitle: (state, { title }) => {
    state.headerTitle = title
  },
  // 获取当前获得关注的朋友的_id
  getActiveId: (state, { activeId }) => {
    state.activeId = activeId
  },
  // 消息队列，聊天队列处理
  changeList: (state, obj) => {
    // 这里是偷懒写法，主要懒，获取到当前打开的聊天队列
    let index = obj._id - 1
    // 判断信息是自己的还是ai的，然后插入聊天队列中
    if (obj.self) {
      obj._id = 0
      state.messageList[index].list.push(obj)
    } else {
      state.messageList[index].list.push(obj)
    }
  }
}

export default mutations
