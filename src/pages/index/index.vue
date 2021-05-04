<template>
  <view>
    <!-- 头部搜索 -->
    <view class="d-flex ai-center bg-primary-color p-1">
      <u-icon name="list" size="50" color="white"></u-icon>
      <view class="flex-1 mx-3">
        <u-search shape="round" bg-color="white" :show-action="false"></u-search>
      </view>
    </view>
    <!-- 轮播图 -->
    <view class="px-1 mt-1">
      <swiper :indicator-dots="true" indicator-active-color="#ff7752" :autoplay="true" :interval="2500" :duration="600" :circular="true">
        <swiper-item v-for="item in slide_list" :key="item._id">
          <image :lazy-load="true" class="w-100 h-100 bd-10" :src="item.src"></image>
        </swiper-item>
      </swiper>

      <!-- 卡片列表 -->
      <swiper class="mt-3" :indicator-dots="true" indicator-active-color="#ff7752">
        <swiper-item class="d-flex ai-center jc-between flex-wrap ">
          <view class="w-20 d-flex flex-d ai-center jc-center" v-for="item in card_list.slice(0, 10)" :key="item._id">
            <image :lazy-load="true" class="card-img" :src="item.src"></image>
            <view class="deep-grey fs-md">{{ item.title }}</view>
          </view>
        </swiper-item>

        <swiper-item class="d-flex ai-center jc-between flex-wrap ">
          <view class="w-20 d-flex flex-d ai-center jc-center" v-for="item in card_list.slice(10)" :key="item._id">
            <image :lazy-load="true" class="card-img" :src="item.src"></image>
            <view class="deep-grey fs-md">{{ item.title }}</view>
          </view>
        </swiper-item>
      </swiper>

      <view class="mt-3">
        <image style="height:200rpx" :lazy-load="true" class="w-100" src="//m.360buyimg.com/mobilecms/s750x200_jfs/t1/186068/7/396/84179/60816a6eEb4680c62/b93f19aae06a7029.png.webp"></image>
      </view>

      <!-- 商品列表 -->
      <view>
        <u-waterfall v-model="goods_list" ref="uWaterfall">
          <template v-slot:left="{ leftList }">
            <view class="demo-warter" v-for="(item, index) in leftList" :key="index">
              <!-- 警告：微信小程序中需要hx2.8.11版本才支持在template中结合其他组件，比如下方的lazy-load组件 -->
              <u-lazy-load threshold="-450" border-radius="10" :image="item.image" :index="index"></u-lazy-load>
              <view class="demo-title">
                {{ item.product_title }}
              </view>
              <view class="demo-price"> {{ item.final_price }}元 </view>
              <u-icon name="close-circle-fill" color="#fa3534" size="34" class="u-close" @click="remove(item.id)"></u-icon>
            </view>
          </template>
          <template v-slot:right="{ rightList }">
            <view class="demo-warter" v-for="(item, index) in rightList" :key="index">
              <u-lazy-load threshold="-450" border-radius="10" :image="item.image" :index="index"></u-lazy-load>
              <view class="demo-title">
                {{ item.product_title }}
              </view>
              <view class="demo-price"> {{ item.final_price }}元 </view>
              <u-icon name="close-circle-fill" color="#fa3534" size="34" class="u-close" @click="remove(item.id)"></u-icon>
            </view>
          </template>
        </u-waterfall>
      </view>
    </view>
  </view>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { get_goods_list, get_slides_list, get_card_list } from 'req/getData'
@Component({
  components: {},
})
export default class Index extends Vue {
  goods_list: object[] = []
  slide_list: object[] = []
  card_list: object[] = []
  fetch_data: object = { page: 1, size: 40 }

  created() {
    this.fetch_goods()
    this.fetch_slides()
    this.fetch_cardlist()
  }
  onReachBottom() {
    console.log('到底了')
  }
  private async fetch_goods() {
    let res = await get_goods_list(this.fetch_data)
    if (res && res.statusCode == 200 && res.data.length > 0) this.goods_list = res.data
  }
  private async fetch_slides() {
    let res = await get_slides_list()
    if (res && res.statusCode == 200 && res.data.length > 0) this.slide_list = res.data
  }
  private async fetch_cardlist() {
    let res = await get_card_list()
    if (res && res.statusCode == 200 && res.data.length > 0) this.card_list = res.data
    console.log(this.card_list)
  }
}
</script>
<style lang="scss">
.card-img {
  width: 88rpx;
  height: 88rpx;
}
page {
  background-color: #f6f6f6;
}
.bd-10 {
  border-radius: 15rpx;
}
</style>
