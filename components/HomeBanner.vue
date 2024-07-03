<template>
    <div id="banner" class="banner-box" >
        <div v-swiper="swiperOption" class="swiper-container">
            <div class="swiper-wrapper ">
                <div class="swiper-slide relative" v-for="(item, index) of pcbanner" :key="index">
                    <img :src="`${$config.IMAGE_BASE_URL}${item.url}`" :alt="item?.name || 'banner'" class="w-[100vw] h-[100vh]">
                    <div class="absolute top-[50%]  translate-y-[-50%] text-white w-[100vw] text-center">
                        <!-- left-[50%] translate-y-[-50%] -->
                        <h2 class="text-6xl font-semibold text-center">Visit Our Plant Extract Products</h2>
                        <p class="text-[40px] text-center py-10">Advanced Technical Support</p>
                        <div class="flex justify-center">
                            <div class="w-[190px] h-[70px] bg-white leading-17 text-[#00C0CC] text-2xl font-semibold rounded">
                                VISIT IT
                            </div>
                        </div>
                    </div>
                </div>
               
            </div>
            <div class="swiper-pagination text-white bg-none"></div>
            <div class="swiper-button-prev text-white bg-none"></div>
            <div class="swiper-button-next text-white bg-none"></div>
        </div>
    </div>
</template>
<script>
export default {
    props: ['pcbanner', 'swiperOption'],
    methods: {
    handleScroll() {
  	  // 页面滑动的距离
      let scrollTop = document.documentElement.scrollTop
    },
    },
    mounted(){
        window.addEventListener('scroll', this.handleScroll)
    }

}
</script>
<style lang="less">
.swiper-pagination-bullet-active {
    background-color: #fff;
    background-image: none;
}
.swiper-button-prev{
   left: 45px;
} 
.swiper-button-next{
   right: 45px;
}
</style>