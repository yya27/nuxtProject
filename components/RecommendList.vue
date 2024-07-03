<template>
  <div class="my-20">
    <div class="px-7 w-full lg:max-w-[1542px] m-auto">
      <div class="group/1">
        <div class="font-semibold text-4xl">PRODUCT RECOMMENDATIONS</div>
        <div class="flex justify-between align-end">
          <div class="font-normal text-xl text-[#666666] mt-10">
            Here we will showcase some of our main products
          </div>
          <div
            class="hidden lg:block pro-ishow-more text-[#666666] text-lg mt-5"
          >
            View More
            <i class="el-icon-arrow-right text-[#666666]"></i>
          </div>
        </div>
      </div>
      <div class="product_item w-full relative justify-between">
        <div class="w-full lg:w-[92%] grid grid-cols-1">
          <!-- <div v-swiper="recommendSwiperOption" class="swiper-container">
            <div class="swiper-wrapper">
              <div
                class="swiper-slide relative"
                v-for="(item, index) of list"
                :key="index"
              >
                <ProductItem :data="item" :type="type" />
              </div>
            </div>
          </div> -->
           <SwiperProduct :option='recommendSwiperOption' :data='list' />
        </div>
        <div
          class="hidden lg:block lg:flex swiper-button-next text-white bg-none"
        ></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["type",'hotProducts'],
  data() {
    return {
      fullWidth: 1024,
      recommendSwiperOption: {
        slidesPerView: 2,
        spaceBetween: 10,
        loop: true,
        // navigationShow:false,
        navigation: {
          nextEl: ".swiper-button-next",
          //  prevEl: ".swiper-button-prev",
        },
        autoplay: false,
        breakpointsInverse: true,
        breakpoints: {
          //当宽度大于等于320
          1024: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          //当宽度大于等于480
          768: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          //当宽度大于等于640
          640: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
        },
      },
    };
  },
  computed: {
    list(){
      this.hotProducts.map((item)=>item.name_ch=item.name)
      return this.hotProducts
    }
  },
  methods: {},
  mounted() {
  },
};
</script>
<style lang="less" scoped>
.pro-ishow-more {
  color: #00c0cc;
  i {
    color: #00c0cc;
  }

  &::after {
    content: "";
    display: block;
    width: 100%;
    height: 1px;
    background-color: #00c0cc;
    left: 0;
    right: 0;
    bottom: 0;
  }
}
::v-deep .swiper-container {
  margin: 0px;
}
::v-deep .swiper-button-next {
  color: #333;
  height: calc(100% - 173.78px);
  margin-top: 30px !important;
  top: 0;
  margin: 0;
  right: 0;
  width: 90px;
  background-color: #f5f5f5;
  transition: 0.3s ease;
  &:hover {
    background-color: #00c0cc;
    color: #ffffff;
  }
}
</style>
