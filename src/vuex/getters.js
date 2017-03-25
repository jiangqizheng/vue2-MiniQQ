// 类似计算数据，根据state的数据，筛选或者暴露一格新数据

const getters = {
  // 根据当前选中的朋友的_id来筛选出当前的friend的具体数据
  friend: (state) => {
    return state.data.friends.filter(x => x._id === state.activeId)[0]
  }
}

export default getters
