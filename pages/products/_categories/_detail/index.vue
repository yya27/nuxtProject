<template>
  <div>
    <div class="px-6.5 w-full lg:max-w-[1542px] m-auto py-6 mt-[12%]">
      <div class="py-6">
        <a href="/" rel="nofollow">Home</a> &gt;
        <a :href="productMenu.path" rel="nofollow">{{ productMenu.name_ch }}</a>
        &gt;
        <a :href="productDetail.classUrl" rel="nofollow">{{
          productDetail.className
        }}</a>
        &gt;
        <span>{{ productDetail.name?? '' }}</span>
      </div>
      <div class="pt-10 w-full lg:pt-12 lg:flex justify-between">
        <div class="mdetails-left w-full lg:w-[38.91%]">
          <div>
            
            <!--放大镜效果-->
            <Zoom :skuImageList="productPics" :currentIndex="currentIndex" />
            <!-- 小图列表 -->
            <div v-if="productPics && productPics.length > 0"  class="mt-4 relative w-[102%]">
              <div v-swiper="swiperOption" class="swiper-container px-8">
                <div class="swiper-wrapper">
                  <div
                    class="swiper-slide"  v-for="(skuImage, index) in productPics" :key="index"
                  >
                    <img :src="skuImage ? skuImage.url : ''"  class="w-[100px] h-[100px]" @click="changeCurrentIndex(index)" />
                  </div>
                  <!-- :class="{active:currentIndex==index}" -->
                </div>
                <div class="swiper-button-next"></div>
                <div class="swiper-button-prev"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="mdetails-right w-full lg:w-[57.26%]">
          <div style="border-bottom: 1px solid #ddd;" class="pb-6">
            <div  class="text-[35px] font-medium pb-5">{{productDetail.name}}</div>
            <div class="flex justify-between items-end">
              <div class="mt-4 text-xl">
                Main contents: Astragalus Polysacharin <br>Specification: 10%-70%
              </div>
              <div class="flex">
                <Share/>
              </div>
            </div>
          </div>
          <div class="mdetails-right-synopsis pt-5">
            <div v-html="productDetail?.productDes"></div>
          </div>
          <div class="flex mt-10 flex-wrap">
            <a href="#" class="cursor-pointer bg-[#00C0CC] text-[#ffffff]  text-base lg:text-2xl inline-flex justify-center items-center w-full h-14 lg:w-[241px] " style="border: 2px solid #00C0CC;">
               Send Inquiry <i class="el-icon-arrow-right"></i>
            </a>
            <a href="#" class="mt-5 lg:mt-0 cursor-pointer text-[#00c0cc]  text-base lg:text-2xl inline-flex justify-center items-center w-full h-14 lg:w-[241px] lg:ml-5 hover:bg-[#00C0CC] hover:text-[#ffffff]" style="border: 2px solid #00C0CC;">
              Download <i class="el-icon-download"></i>
            </a>
          </div>
        </div>
      </div>
      <div class="mt-10">
        <div class="flex">
          <div :class="`text-[45px] lg:text-[22px] mr-4 py-5 ${tabIndex==0?'details-tab':''}`" @click="onClick(0)">Product Description</div>
          <div :class="`text-[45px] lg:text-[22px] py-5 ${tabIndex==0?'':'details-tab'}`" @click="onClick(1)">Our Advantages</div>
        </div>
        <div class="mdetails-content  mt-6">
          <div v-html='ueData.content'></div>
        </div>
      </div>
    </div>
    <Message />
  </div>
</template>
<script>
export default {
  data() {
    return {
      tabIndex:0,
      currentIndex: 0,
      swiperOption: {
        slidesPerView: 5,
        spaceBetween: 10,
        loop: true,
        autoplay: false,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
      NewsList: [
        { imgUrl: "http://m28.aixdb.cn:81/img/d-img.png" },
        { imgUrl: "http://m28.aixdb.cn:81/img/d-img.png" },
        { imgUrl: "http://m28.aixdb.cn:81/img/d-img.png" },
        { imgUrl: "http://m28.aixdb.cn:81/img/d-img.png" },
        { imgUrl: "http://m28.aixdb.cn:81/img/d-img.png" },
        { imgUrl: "http://m28.aixdb.cn:81/img/d-img.png" },
      ],
      productPics: [],
    };
  },
  async asyncData({ app, route, store }) {
    // 产品菜单
    const productMenu = store.state.menu.find(e => e.type === "products");

    // 请求产品详情数据
    const routeId = route.name;
    const { detail } = app.$websiteDataHelper.getDetail("products", routeId);
      // 渲染产品轮播图
    const { productPics = [] } = detail;

    if (Reflect.has(detail, "showPic") && typeof detail.showPic === "string") {
      if (detail.showPic !== "") {
        productPics.unshift({ url: detail?.showPic })
      }
    }

    // 渲染产品详情
    const glTemps = JSON.parse(detail.glTemps);
    let ue = [];
    let download = [];
    let property = [];

    for (let item in glTemps) {
      switch (glTemps[item].type) {
        case "ue":
          ue.push(glTemps[item]);
          break;
        case "ck":
          ue.push(glTemps[item]);
          break;
      }
    }
    return {
      productMenu: productMenu,
      productDetail: detail ?? {},
      productPics: productPics ?? [],
      ueData: ue[0],
      downloadData: download,
      propertyData: property,
      productPics: productPics ?? [],
    };
  },
  methods: {
    changeCurrentIndex(index) {
      this.currentIndex = index;
    },
    onClick(index){
      this.tabIndex=index;
    }
  },
};
</script>
<style scoped lang='less'>
::v-deep .swiper-button-next,.swiper-button-prev {
  position: absolute;
  color: #333;
  width: 23px;
  height: 100%;
  top: 0;
  margin: 0;
  background-color: #f5f5f5;
}
::v-deep .swiper-button-prev{
  left: 0;
}
::v-deep .swiper-button-next{
  right: 0;
}
::v-deep .swiper-button-next:after, .swiper-button-prev:after{
      font-size: 20px ;
      color: #333;
}
.details-tab{
   border-bottom:5px solid  #00C0CC;
}
</style>
