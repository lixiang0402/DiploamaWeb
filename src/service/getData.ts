import api from './api'
import { postData, getData } from './fetchMethods'
// import { postDyData, postDyRtData } from './httpdy'
// import { $cmmpost, postDataSearch, postTBDataSearch, postTBData, postDataWithUrl } from './http'
// // postCmmData

// // 首页:获取主播列表
export const get_goods_list = data => {
  return postData(api.List, data)
}
// 获取轮播图
export const get_slides_list = () => {
  return getData(api.SlideShow)
}
export const get_card_list = () => {
  return getData(api.CardList)
}
// // 首页→:获取主播直播历史
// export const get_author_rooms_history = submitData => {
//   return $cmmpost(api.LIST_ROOMS, submitData)
// }
// //直播历史页:获取抖音主播详细信息
// export const dy_get_author_info = submitData => {
//   return $cmmpost(api.DY_GET_AUTHOR_INFO, submitData)
// }

// // 直播详情页:获取商品列表
// export const get_products_list = submitData => {
//   return $cmmpost(api.LIST_PRODUCTS, submitData)
// }
// // 直播详情页:获取直播间更多信息
// export const get_room_extra = submitData => {
//   return $cmmpost(api.ROOM_EXTRA, submitData)
// }
// // 直播详情页:获取主播直播间相关信息
// export const get_room_info = submitData => {
//   return $cmmpost(api.ROOM_INFO, submitData)
// }

// // 搜索某个商品 哪几个主播带过货
// export const get_product_belong_room = submitData => {
//   return postDyRtData(api.SEARCH_PRODUCT_ID, submitData)
// }

// // 搜索主播
// export const search_author = submitData => {
//   return postDyData(api.API_SEARCH_AUTHOR, submitData)
// }
// // 搜索直播间
// export const search_rooms = submitData => {
//   return postDyData(api.API_SEARCH_ROOMS, submitData)
// }
// // 搜索商品
// export const search_product_name = submitData => {
//   return postDataSearch(api.API_ANALYSIS_SEARCH_PRODUCT_NAME, submitData)
// }
// // 搜索淘宝主播
// export const search_author_tb = submitData => {
//   return postTBDataSearch(api.API_ANALYSIS_AUTHOR_SEARCH_TB, submitData)
// }

// // 获取淘主播带货的商品列表
// export const room_products_tb = submitData => {
//   return postTBData(api.API_ANALYSIS_ROOM_PRODUCTS_TB, submitData)
// }
// // 获取淘主播的个人信息
// export const author_info_tb = submitData => {
//   return postTBData(api.API_ANALYSIS_AUTHOR_INFO, submitData)
// }

// // 主播监控
// export const logs_search = submitData => {
//   return postDataWithUrl(api.API_BASE_CMM_URL, api.LOGS_SEARCH, submitData)
// }
// // 自营商品数据
// export const jst_order_sku_daily = submitData => {
//   return postDataWithUrl(api.API_BASE_JST_URL, api.JST_ORDER_SKU_DAILY, submitData)
// }
