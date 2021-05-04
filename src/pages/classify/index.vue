<template>
  <view> {{ name }} </view>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { get_goods_list, get_slides_list } from '../../service/getData'
@Component({})
export default class Index extends Vue {
  // private name: string = 'asdca123'
  public created() {
    this.fetch_goods()
    this.fetch_slides()
  }
  private async fetch_goods() {
    let res = await get_goods_list({ page: 1, size: 100 })
    console.log(res)
  }
  private async fetch_slides() {
    let res = await get_slides_list()
    console.log(res)
  }
}
</script>
<style></style>
