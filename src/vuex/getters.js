// 类似计算数据，根据state的数据，筛选或者暴露一格新数据

const getters = {
  // 根据当前选中的朋友的_id来筛选出当前的friend的具体数据
  friend: (state) => {
    return state.data.friends.filter(x => x._id === state.activeId)[0]
  },
  // 对当前消息队列中的消息进行加工，添加对应的好友资料
  nowMessageList: (state) => {
    let list = state.messageList
    list.forEach(x => {
      // 由_id筛选出对应的好友
      let friend = state.data.friends.filter(i => i._id === x._id)[0]
      x.friend = friend
    })
    return list
  }
}

export default getters
