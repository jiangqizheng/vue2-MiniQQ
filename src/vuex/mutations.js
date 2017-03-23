const mutations = {
  // 对话
  showDialog: (state) => {
    state.dialog = !state.dialog
  },
  // 侧边栏
  showSidebar: (state, {flag} = {}) => {
    state.sidebar.open = !state.sidebar.open
    state.sidebar.docked = !flag
  },
  // 个人主页
  showPersonindex: (state) => {
    state.personindex = !state.personindex
  },
  showSearch: (state) => {
    state.search = !state.search
  }
}

export default mutations
