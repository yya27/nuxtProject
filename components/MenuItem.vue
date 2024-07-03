<template>
  <!-- :name="subItem.name_ch" :path="subItem.path" :children="subItem.children || []" -->
  <div class="px-5 w-full">
    <div v-if="show" class="drop-content w-full">
      <div class="px-10">
        <div class="py-2 text-base grid grid-cols-[404px_auto]">
          <div class="drop-c2-left relative">
            <ul>
              <li class="py-6 " @mouseenter="handleMouseEnter(index)" v-for="(item, index) in subItem" :key="index">
                <a
                  :href="item.path"
                  class="text-nowrap overflow-hidden lg:w-full xl:w-auto text-black inline-block group/2"
                >
                  <div class="flex items-center">
                    <p class="text-black group-hover/2:text-[#00C0CC]">
                      {{ item.name_ch }}
                    </p>
                  </div>
                </a>
              </li>
            </ul>
          </div>
          <div class="pl-[6.25vw]" >
            <div v-if="contentData && contentData.length <= 2" class="grid grid-cols-2 gap-4" >
              <ProductItem
                v-for="(item, index) in contentData"
                :key="index"
                :data="item"
                type="NEWS"
              />
            </div>
            <div v-else class="w-full">
              <div class="w-full lg:w-[90%] grid grid-cols-1">
                <SwiperProduct :option='recommendSwiperOption' :data='contentData'  />
              </div>
              <div
                class="hidden lg:block lg:flex swiper-button-next text-white bg-none"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else v-for="(item, index) in subItem" :key="index">
      <div class="w-[40%]">
        <a
          :href="item.path"
          class="text-nowrap overflow-hidden lg:w-full xl:w-auto text-black inline-block group/2"
        >
          <div class="flex items-center">
            <p class="text-black group-hover/2:text-[#00C0CC]">
              {{ item.name_ch }}
            </p>
            <!-- item?.children && item.children.length -->
          </div>
        </a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["subItem", "show",'contentData'],
  data() {
    return {
      recommendSwiperOption: {
        slidesPerView: 3,
        spaceBetween: 10,
        loop: true,
        // navigationShow:false,
        navigation: {
          nextEl: ".swiper-button-next",
          //  prevEl: ".swiper-button-prev",
        },
        autoplay: false,
        // breakpointsInverse: true,
        // breakpoints: {
        //   //当宽度大于等于320
        //   1024: {
        //     slidesPerView: 4,
        //     spaceBetween: 20,
        //   },
        //   //当宽度大于等于480
        //   768: {
        //     slidesPerView: 3,
        //     spaceBetween: 10,
        //   },
        //   //当宽度大于等于640
        //   640: {
        //     slidesPerView: 2,
        //     spaceBetween: 10,
        //   },
        // },
      },
    };
  },
  mounted() {},
  methods: {
    handleMouseEnter(index) {
      this.contentData = this.subItem[index]?.children || [];
    },
  },
};
</script>
<style scoped lang='less'>
.drop-content {
  width: 100%;
  // transform: translate(0, 100%);
}
.drop-c2-left::after {
  content: "";
  display: block;
  width: 1px;
  height: 100%;
  background-color: #ddd;
  right: 0;
  top: 50%;
  transform: translate(0, -50%);
  position: absolute;
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
  width: 90px;
  background-color: #f5f5f5;
  transition: 0.3s ease;
  &:hover {
    background-color: #00c0cc;
    color: #ffffff;
  }
}
</style>