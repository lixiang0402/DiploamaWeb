<script>
import Vue from 'vue'
import store from './store/store'
import './assets/css/css.scss'
import './utils/mixin.ts'
import uni from '@dcloudio/uni-app-plus'
export default Vue.extend({
  mpType: 'app',
  store,
})
</script>
<style lang="scss">
/*每个页面公共css */
/* @import 'uview-ui/index.scss'; */
@import 'uview-ui/index.scss';
</style>
