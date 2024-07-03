<template>
  <div>
    <Breadcrumb
      bannerImg="http://m28.aixdb.cn:81/img/banner-list3.png"
      :currentMenu="currentMenu"
    />
    <div>
      <div class="px-7 w-full lg:max-w-[1542px] m-auto py-6">
         <h2 class="mt-6 lg:mt-0 text-4xl font-semibold">{{ currentVO.name_ch }}</h2>
        <div class="aboutUs-content" v-html="currentVO.content"></div>
        <!-- <div class="pt-10 lg:pt-20 lg:grid grid-cols-2 gap-10">
          <div class="w-full relative lg:pt-[65.5%]">
            <Video />
          </div>
          <div>
            <h2 class="mt-6 lg:mt-0 text-4xl font-semibold">{{ currentVO.name_ch }}</h2>
            <div class="mt-5 text-xl text-[#333]">
              <p>
                Huizhou Videya Technology Co., Ltd. is a professional
                manufacturer and supplier of dental instruments integrating R&D,
                production and marketing since 2011. After nearly ten years of
                precipitation and growth of the industry, our company has a
                strong R&D and manufacturing capacity and efficent detection
                means.
              </p>
              <p>
                At present, VIDEYA cover a full range of endodonstic
                instruments: K/H/R files, Spreader/Plugger, Paste carriers,
                Barbed broaches, Gates drills/Pesso reamers, Fiber post drills,
                Gutta percha/Paper point, all systems of NITI Rotary files
                etc.It is a long established fact that a readers will be
                distracted by readable content of a page when looking at its
                layout.
              </p>
            </div>
          </div>
        </div>
        <div class="pt-10 lg:pt-20 lg:grid grid-cols-3 gap-4 auto-cols-auto ">
          <div class="border-2 border-[#00C0CC] p-5 border-solid mt-6 lg:mt-0" v-for="(item,index) in list" :key="index">
            <div class="text-[22px] font-semibold">{{ item.name }}</div>
            <p class="mt-4 text-xl text-[#666666]">{{ item.desc }}</p>
          </div>
        </div>
        <div class="pt-10 lg:pt-20">
          <div class="text-4xl font-semibold">Plant Environment</div>
          <div class="text-xl mt-4">
            <p>Huizhou Videya Technology Co., Ltd. is a professional manufacturer and supplier of dental instruments integrating R&D, production and marketing since 2011. After nearly ten years of precipitation and growth of the industry, our company has a strong R&D and manufacturing capacity and efficent detection means.<br> Videya Technology Co., Ltd. is a professional manufacturer and supplier of dental instruments integrating R&D, production and marketing since 2011. After nearly ten years of precipitation and growth of the industry, our company has a strong R&D and manufacturing capacity and efficent detection means.Huizhou Videya Technology Co., Ltd. is a professional manufacturer and supplier of dental instruments integrating R&D, production and marketing since 2011. After nearly ten years of precipitation and growth of the industry, our company has a strong R&D and manufacturing capacity and efficent detection means.</p>
          </div>
          <div class=" mt-4 lg:grid grid-cols-3 gap-4 ">
            <div v-for="index in 6" :key="index" class="mt-6 lg:mt-0">
              <img :src="`http://m28.aixdb.cn:81/img/en${index}.png`" alt="" class="inline-block h-auto w-full">
            </div>
          </div>
        </div> -->
      </div>
    </div>
    <Message/>
  </div>
</template>
<script>
// import Video from "../../components/Video.vue";
export default {
  data() {
    return {
      // list: [
      //   {
      //     name: "Enterprise Advantages",
      //     desc: "Huizhou Videya Technology Co., Ltd. is a professional manufacturer and supplier of dental instruments integrating R&D, production and marketing since 2011.",
      //   },
      //   {
      //     name: "Enterprise Advantages",
      //     desc: "Huizhou Videya Technology Co., Ltd. is a professional manufacturer and supplier of dental instruments integrating R&D, production and marketing since 2011.",
      //   },
      //   {
      //     name: "Enterprise Advantages",
      //     desc: "Huizhou Videya Technology Co., Ltd. is a professional manufacturer and supplier of dental instruments integrating R&D, production and marketing since 2011.",
      //   },
      // ],
    };
  },
  // components: { Video },
  async asyncData({ app, route, store }) {
    const currentMenu = store.state.currentMenu;
     // 关于我们类型的菜单
    const aboutUsMenus = store.state.menu.filter((m) => m.type === 'about-us');
     // 获取当前路由对应的视图对象数据
    const getCurrentVO = function (menus, currentPath) {
      for (const m of menus) {
        if (m.path === currentPath) {
          return m;
        }

        if (m.children) {
          const currentMenu = getCurrentVO(m.children, currentPath);

          if (currentMenu) {
            return currentMenu;
          }
        }
      }

      return null;
    }
    // 当前视图对象数据
    const currentVO = getCurrentVO(aboutUsMenus, route.path);
    return {
      currentMenu: currentMenu || {},
      currentVO: currentVO ?? {},
    };
  },
};
</script>
