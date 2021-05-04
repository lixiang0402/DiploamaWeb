import uni from '@dcloudio/uni-app-plus'

/**
 * 存储localStorage
 */
export const setStore = (name: string, content: any) => {
  if (!name) return
  uni.setStorageSync(name, content)
}

/**
 * 获取localStorage
 */
export const getStore = (name: string) => {
  if (!name) return
  return uni.getStorageSync(name)
}

/**
 * 删除localStorage
 */
export const removeStore = (name: string) => {
  if (!name) return
  uni.removeStorageSync(name)
}
