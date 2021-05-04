import uni from '@dcloudio/uni-app-plus'
import api from './api'
const getData = function(url: string) {
  return new Promise<any>((resolve, reject) => {
    uni.request({
      url: api.BASE_URL + url,
      method: 'GET',
      success(data) {
        resolve(data)
      },
      fail(error: any) {
        reject(error)
      },
    })
  })
}

const postData = function(url: string, data: any) {
  return new Promise<any>((resolve, reject) => {
    uni.request({
      url: api.BASE_URL + url,
      method: 'POST',
      data: {
        // token: store.getters.token,
        data: data,
      },
      header: {
        'Content-Type': 'application/json',
      },
      success(data) {
        resolve(data)
      },
      fail(error) {
        reject(error)
      },
    })
  })
}
export { getData, postData }
