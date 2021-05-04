import Vue from 'vue'
import Vuex from 'vuex'
// import getters from './getters'
// import user from './modules/user'
import room from './modules/room'
// import tb_author from './modules/tb_author'
// import { getStore } from '../utils/storage'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    tb_author_info: {},
    dy_goods_info: {},
  },
  mutations: {
    SET_TB_AUTHOR_INFO: (state: any, payload: any) => {
      state.tb_author_info = payload
    },
    SET_DY_GOODS_INFO: (state: any, payload: any) => {
      state.dy_goods_info = payload
    },
  },
  modules: {
    // user,
    room,
  },
  // getters,
})
