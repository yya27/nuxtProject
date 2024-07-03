<template>
  <div>
    <HomeBanner :pcbanner="pcbanner" :swiperOption="swiperOption" />
    <ProductList type="product" :hotProductClass="hotProductClass"/>
    <Flow />
    <RecommendList type="recommend" :hotProducts='hotProducts'/>
    <Introduce />
    <UserEvaluate />
    <ProductList type="NEWS" :hotProductClass="hotKnowledge" />
    <Message/>
  </div>
</template>
<script>
import { isMobile } from "~/utils";
const defProducts = [
  {
    name: "Special materials",
    showPic: "/img/products-deault.png",
  },
  {
    name: "Special materials",
    showPic: "/img/products-deault.png",
  },
  {
    name: "Special materials",
    showPic: "/img/products-deault.png",
  },
];
export default {
  data() {
    return {
    };
  },
  async asyncData({ app, store }) {
    // 轮播图
    const pcbanner = app.$websiteDataHelper.pcbanner;

    // 关于我们
    const [aboutUs] = app.$websiteDataHelper.websitedata.about_us;

    const productsMenu = store.state.menu.find(m => m.type === "products");
    // 优势产品分类
    const hotProductClass = productsMenu.children.slice(0, 3);
    
     // 热门产品
    const hotProducts = app.$websiteDataHelper.hotProducts;
     // 产品菜单

    const newsList = (app.$websiteDataHelper.websitedata.knowledge || []).slice(0,3);
    
        // 热门软文
    const hotKnowledge = app.$websiteDataHelper.hotKnowledge.slice(0 ,3);
    return {
      hotProducts: hotProducts ?? [],
      hotKnowledge: hotKnowledge ?? [],
      pcbanner: pcbanner ?? [],
      hotProductClass: hotProductClass ?? [],
      aboutUs: aboutUs ?? {},
      newsList,
      swiperOption: {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
      },
    };
  },
  mounted() {
    if (isMobile()) {
      this.pcbanner = this.pcbanner.filter(e => e?.type && e.type === "phone");
    } else {
      this.pcbanner = this.pcbanner.filter(v => !v?.type);
    }
  },
};
</script>
