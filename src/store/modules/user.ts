// // import { wxLogin, updateToken } from '../../service/httpwx'
// import { getStore, setStore } from '../../utils/storage'

// const user = {
//   state: {
//     hasLogin: getStore('hasLogin') || false,
//     token: getStore('auth_token') || '',
//     userInfo: getStore('userInfo') || {},
//   },
//   mutations: {
//     SET_TOKEN: (state: any, token: string) => {
//       state.token = token
//       if (token.length > 5) {
//         state.hasLogin = true
//       } else {
//         state.hasLogin = false
//       }
//       setStore('auth_token', token)
//       setStore('hasLogin', state.hasLogin)
//     },
//     SET_USER: (state: any, userInfo: any) => {
//       state.userInfo = userInfo
//       // //console.log(userInfo)
//       setStore('userInfo', userInfo)
//     },
//   },
//   actions: {
//     // 登录
//     Login({ commit }, data) {
//       return new Promise<any>((resolve, reject) => {
//         wxLogin({ code: data.code })
//           .then(res => {
//             let token = res.data.token
//             // //console.log(token, '123')

//             commit('SET_USER', res.data.user)
//             if (token && token.length > 5) {
//               commit('SET_TOKEN', token)
//               resolve()
//             } else {
//               reject(res)
//             }
//           })
//           .catch(res => {
//             reject(res)
//           })
//       })
//     },
//     // 登出
//     LogOut({ commit }) {
//       return new Promise<any>(resolve => {
//         commit('SET_TOKEN', '')
//         resolve()
//       })
//     },
//     UpdateUser({ commit }, user) {
//       return new Promise<any>(resolve => {
//         // //console.log("SET_USER", user);
//         commit('SET_USER', user)
//         resolve()
//       })
//     },
//     // 更新Token
//     UpdateToken({ commit }) {
//       return new Promise<any>((resolve, reject) => {
//         updateToken()
//           .then(res => {
//             let token = res.data.token
//             if (token && token.length > 5) {
//               commit('SET_TOKEN', token)
//               let user = res.data.user
//               if (user) {
//                 commit('SET_USER', user)
//               }
//               resolve()
//             } else {
//               reject(res)
//             }
//           })
//           .catch(res => {
//             reject(res)
//           })
//       })
//     },
//   },
// }

// export default user
