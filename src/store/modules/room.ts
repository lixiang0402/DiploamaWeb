const room = {
  state: {
    info: {},
    authorList: {},
    shop: {},
    goodsDetail: {},
  },
  mutations: {
    SET_ROOM_INFO: (state: any, info: any) => {
      state.info = info
    },
    SET_AUTHOR_LIST: (state: any, info: any) => {
      state.authorList = info
    },
    SET_SHOP_INFO: (state: any, info: any) => {
      state.shop = info
    },
    SET_GOODS_DETAIL: (state: any, info: any) => {
      state.goodsDetail = info
    },
  },
}

export default room
