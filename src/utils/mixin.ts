import Vue from 'vue'
Vue.mixin({
  methods: {
    // numer->str 保留一位小数
    retain1(val) {
      return parseFloat(val).toFixed(1)
    },
    // numer->str->number 保留2位小数
    retain2(val) {
      return parseFloat(val.toFixed(2))
    },

    //过滤方法
    searchGoodsList(value, kewWord, list) {
      let _search = value
      if (_search) {
        //不区分大小写处理
        let reg = new RegExp(_search, 'ig')
        //es6 filter过滤匹配，有则返回当前，无则返回所有
        return list.filter(function(e) {
          //匹配某个字段
          return e[kewWord].match(reg)
        })
      }
      return list
    },
    formatSecond(second) {
      if (second < 0) {
        second = 0
      }
      var h = Math.floor((second / 3600) % 24)
      var m = Math.floor((second / 60) % 60)
      var s = second % 60
      // //console.log(h, m, s, second)
      if (h < 1 && m < 1) {
        return s + '秒'
      } else if (h < 1) {
        return m + '分' + s + '秒'
      } else {
        return h + '小时' + m + '分' + s + '秒'
      }
    },
    //  初始化数字 26000->2.6w
    formatNumber(value) {
      let param = {
        value: '',
        unit: '',
      }
      let k = 10000,
        sizes = ['', 'w', '亿', '万亿'],
        i,
        v
      if (value === null || value === 'undefined' || value === NaN || value === 'NaN') {
        value = 0
      }
      if (value == 0) {
        i = 0
        v = 0
      } else {
        i = Math.floor(Math.log(value) / Math.log(k))
        // v=Number(((value / Math.pow(k, i)))).toFixed(2)
        v = parseFloat(Number(value / Math.pow(k, i)).toFixed(2))
      }
      if (v === NaN || v === 'NaN') {
        v = 0
      }
      if (i === NaN || i === 'NaN') {
        i = 0
      }
      param.value = v
      param.unit = sizes[i]

      return param.value + param.unit
    },
    // 将数组中的对象按照某个key从大到小排列
    // 使用方法 arr.sort(compare('age'))
    compare(property) {
      return function(a, b) {
        let value1 = a[property]
        let value2 = b[property]
        return value2 - value1
      }
    },
    // 处理时间戳
    getPermissionName(permission) {
      if (permission < 11) {
        return '游客'
      }
      if (permission < 99) {
        return '正式用户'
      }
      if (permission < 999) {
        return '超级用户'
      }
      return '管理员'
    },
    // 处理时间戳
    getYMDHM(timestamp) {
      let time = new Date(timestamp * 1000)
      let year = time.getFullYear()
      const month = (time.getMonth() + 1).toString().padStart(2, '0')
      const date = time
        .getDate()
        .toString()
        .padStart(2, '0')
      const hours = time
        .getHours()
        .toString()
        .padStart(2, '0')
      const minute = time
        .getMinutes()
        .toString()
        .padStart(2, '0')
      return year + '-' + month + '-' + date + ' ' + hours + ':' + minute
    },
    getQueryString(url, name) {
      var reg = new RegExp('(^|&|/?)' + name + '=([^&|/?]*)(&|/?|$)', 'i')
      var r = url.substr(1).match(reg)
      if (r != null) {
        // //console.log("r = " + r)
        // //console.log("r[2] = " + r[2])
        return r[2]
      }
      return null
    },
    checkUserInt() {
      let user = this.$store.getters.userInfo
      if (user != null && user.permission != null && user.nickName != null && user.nickName.length > 0 && user.avatarUrl != null && user.avatarUrl.length > 5) {
        if (user.mobile != null && user.mobile.length > 5) {
          return -1
        }
        return 1
      }
      return 0
    },
    checkUser() {
      let user = this.$store.getters.userInfo
      if (user != null && user.permission != null && user.nickName != null && user.nickName.length > 0 && user.avatarUrl != null && user.avatarUrl.length > 5) {
        if (user.mobile != null && user.mobile.length > 5) {
          return true
        }
      }
      return false
    },
    objIsEmpty(obj) {
      if (Object.keys(obj).length > 0) return true
      else return false
    },
  },
})
