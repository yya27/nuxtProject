<template>
  <div>
    <Breadcrumb
      bannerImg="http://m28.aixdb.cn:81/img/banner-list1.png"
      :currentMenu="currentMenu"
    />
    <div>
      <div
        class="px-7 w-full lg:max-w-[1542px] m-auto py-6 lg:grid grid-cols-3 gap-4"
      >
        <ProductItem
          v-for="(item, index) in categories"
          :key="index"
          :data="item"
          type="NEWS"
        />
        <div class=" hidden lg:block mt-[30px]">
          <a href="#" class="text-[#333] auto-cols-auto ">
              <div class="news-itop">
                <div class="relative flex items-center" style="border-bottom: 1px solid #00C0CC;">
                  <img src="http://m28.aixdb.cn:81/img/list-icon.png" alt="" class="mr-[5px]">
                  Inventory
                  <i class="el-icon-arrow-right text-[#00C0CC]"></i>
                </div>
              </div>
          </a>
        </div>
        <div class="mt-[25px] block lg:hidden" style="border:1px solid #ddd">
          <a href="#" class="w-full h-[50px] text-[#00C0CC] flex items-center justify-center text-base">
            Inventory
            <i class="el-icon-arrow-right text-[#00C0CC]"></i>
          </a>
        </div>
      </div>
    </div>
    <Message/>
    <UserEvaluate/>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [
        {
          url: "http://m28.aixdb.cn:81/img/pros1.png",
          desc: "The active components of plant extracts are relatively complex, mainly including various...",
          name: "Cosmetic Raw Materials",
          path: "/Cosmetic Raw Materials",
        },
        {
          url: "http://m28.aixdb.cn:81/img/pros2.png",
          desc:"The active components of plant extracts are relatively complex, mainly including various...",
          name: "Raw Materials For Health Products",
          path: "/Raw Materials For Health Products",
        },
        {
          url: "http://m28.aixdb.cn:81/img/pros3.png",
          desc:"The active components of plant extracts are relatively complex, mainly including various...",
          name: "Additives",
          path: "/Additives",
        },
        {
          url: "http://m28.aixdb.cn:81/img/pros4.png",
          desc:"The active components of plant extracts are relatively complex, mainly including various...",
          name: "Additives",
          path: "/Additives",
        },
        {
          url: "http://m28.aixdb.cn:81/img/pros5.png",
          desc:"The active components of plant extracts are relatively complex, mainly including various...",
          name: "Additives",
          path: "/Additives",
        },
        {
          url: "http://m28.aixdb.cn:81/img/pros6.png",
          desc:"The active components of plant extracts are relatively complex, mainly including various...",
          name: "Additives",
          path: "/Additives",
        },
        {
          url: "http://m28.aixdb.cn:81/img/pros7.png",
          desc:"The active components of plant extracts are relatively complex, mainly including various...",
          name: "Additives",
          path: "/Additives",
        },
        {
          url: "http://m28.aixdb.cn:81/img/pros8.png",
          desc:"The active components of plant extracts are relatively complex, mainly including various...",
          name: "Additives",
          path: "/Additives",
        },
      ],
    };
  },
  async asyncData({ app, route, store }) {
    const currentMenu = store.state.currentMenu;

    const routeId = route.meta[0].nodeid;
        // 1、根据菜单id，获取左侧列表数据
    const categories = app.$websiteDataHelper.getCategories("products", routeId)

    categories.map((item,index) =>{
      item.showPic=item.typePic || ''
    } )
    // 产品列表
    const currentPage = route.meta[0].page ?? 1;
    const pageSize = 12;
    const { list, count } = app.$websiteDataHelper.getList(
      "products",
      routeId,
      currentPage,
      pageSize
    );
    const productsList = list.reverse();
    return {
      categories: categories ?? [],
      currentMenu: currentMenu || {},
      productsList: productsList ?? [],
      totalDataNumbers: count ?? 0,
    };
  },
};
</script>
<style scoped lang='less'>
.news-itop{
  aspect-ratio: 496 / 282;
    background-color: #f8f8f8;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 26px;
    color: #00C0CC;
}
</style>