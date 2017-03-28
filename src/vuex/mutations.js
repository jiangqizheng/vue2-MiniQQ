// vuex中state的数据只能被mutations方法所更改

const mutations = {
  // 对话
  showDialog: (state) => {
    // 判断当前动作是否是在打开对话，如果是在打开对话，那么进行判断当前当前进行对话的好友是否存在消息队列
    // 如果当前活跃的好友不存在消息队列（被删除的）那么就恢复此好友的消息队列，如果存在，那么无动作
    if (!state.dialog) {
      // 空数组用来判断也是true，所以后面加个[0]
      let message = state.messageList.filter(x => x._id === state.activeId)[0]
      if (!message) {
        let oldMessage = state.messageListFB.filter(x => x._id === state.activeId)[0]
        state.messageList.splice(oldMessage._id - 1, 0, oldMessage)
      }
    }
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
  // ajax获取到用户数据
  getData: (state, data) => {
    // 将ajax获取到的值赋予state
    state.data = data
    // ajax状态更改为结束
    state.isAjax = true
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
    let now = new Date()
    let time = `${now.getHours()}:${now.getMinutes()}`
    // 判断信息是自己的还是ai的，然后插入聊天队列中
    if (obj.self) {
      // 信息是自己发送的
      state.messageList.forEach((item, index, arr) => {
        if (item._id === obj._id) {
          obj._id = 0
          item.list.push({ ...obj, time })
        }
      })
    } else {
      // 信息是ai发送的
      state.messageList.forEach((item, index, arr) => {
        if (item._id === obj._id) {
          item.list.push({ ...obj, time })
        }
      })
    }
  },
  // 删除消息
  removeMessage(state, { _id }) {
    state.messageList.forEach((item, index, arr) => {
      // 判断信息列表中id与正在删除的信息id是否相同，如果相同，就删除信息
      if (item._id === _id) {
        arr.splice(index, 1)
      }
    })
  }
}

export default mutations
