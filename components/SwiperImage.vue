
<template>
  <div>
    <div v-swiper="option" class="swiper-container">
      <div class="swiper-wrapper">
         <div class="swiper-slide" v-for="(skuImage,index) in data" :key="index">
           <img :src="skuImage.imgUrl" class="w-[100px] h-[100px]" @click="changeCurrentIndex(index)">
         </div>
         <!-- :class="{active:currentIndex==index}" -->
      </div>
      <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div>
    </div>
  </div>
</template>
<script>
export default {
  props:['option','data'],
  data() {
    return {
          currentIndex:0
    };
  },
  methods:{
    changeCurrentIndex(index){
        this.currentIndex = index
        //全局事件总线传值给兄弟组件zoom组件，判断此时点击的是哪张图片
        this.$emit('getIndex',this.currentIndex)
      }
  }
};
</script>

<style>
</style>