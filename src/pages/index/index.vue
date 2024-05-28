<template>
  <view class="content">
    <image class="logo" src="/static/logo.png" />
    <view class="text-area">
      <text class="title">{{ title }}</text>
    </view>
     <image src="@/images/home/tmpl.png" />
    <image :src="src1" />
    <view class="bg1">bg1</view>
    <!-- <view style="background-image: url('@/images/home/tmpl-style.png');">bg2</view> -->
    <!-- <view style="background-image: url('../../images/home/tmpl-style.png');">bg2</view> -->
    <view :style="{'background-image': 'url(' + src2 + ')'}"></view>
  </view>
</template>

<script lang="ts">
import * as Vue from 'vue';
import src_1 from '@/images/home/script.png';
import src_2 from '@/images/home/tmpl-style.png';
export default Vue.defineComponent({
  data() {
    return {
      src1: src_1,
      src2: src_2,
      title: 'hello world'
    }
  }
})
</script>

<style>
@font-face {
	font-family: uniicons;
	font-weight: normal;
	font-style: normal;
	src: url('@/images/uni.ttf') format('truetype');
}

.bg1 {
  font-family: uniicons;
  background-image: url('@/images/home/css.png');
}
</style>
