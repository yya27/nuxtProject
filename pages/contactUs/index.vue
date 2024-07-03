<template>
  <div>
    <Breadcrumb
      bannerImg="http://m28.aixdb.cn:81/img/banner-list3.png"
      :currentMenu="currentMenu"
    />
    <div>
      <div class="px-7 w-full lg:max-w-[1542px] m-auto py-6">
        <div
          class="pt-10 pb-5 lg:pt-20 pb-10 lg:grid grid-cols-2 gap-10"
        >
          <div>
            <h2
              class="mt-6 lg:mt-0 text-4xl font-semibold pb-5"
              style="border-bottom: 1px solid #ddd"
            >
              China Headquarters
            </h2>
            <div class="mt-5 text-xl text-[#333]">
              <!-- <div class="" v-for="(item, index) in contactData" :key="index">
                <div class="flex mt-[35px] text-[22px] font-medium">
                  <img
                    :src="item.icon"
                    alt=""
                    class="inline-block mr-5 w-auto object-none pb-7"
                  />
                  <div>{{ item.content }}</div>
                </div>
              </div> -->
              <div class="contactus_content" v-html="currentVO.content"></div>
            </div>
          </div>
          <div class="w-full relative lg:pt-[65.5%]">
            <Video />
          </div>
        </div>
        <div
          class="pt-5 pb-5 lg:pt-10 pb-10 lg:grid grid-cols-2 gap-10"
          style="border-top: 1px solid #ddd"
        >
          <div class="w-full relative">
            <img
              src="http://m28.aixdb.cn:81/img/co1.png"
              alt=""
              class="w-full h-auto"
            />
          </div>
          <div>
            <h2
              class="mt-6 lg:mt-0 text-4xl font-semibold pb-5"
              style="border-bottom: 1px solid #ddd"
            >
              Shenzhen Branch
            </h2>
            <div class="mt-5 text-xl text-[#333]">
              <div class="" v-for="(item, index) in contactData" :key="index">
                <div class="flex mt-[35px] text-[22px] font-medium">
                  <img
                    :src="item.icon"
                    alt=""
                    class="inline-block mr-5 w-auto object-none pb-7"
                  />
                  <div>{{ item.content }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="pt-10 lg:pt-20" style="border-top: 1px solid #ddd">
          <h2 class="mt-6 lg:mt-0 text-4xl font-semibold pb-5">
            Our Overseas Sales Team
          </h2>
          <div class="sales-ul mt-6 grid gap-4  grid-cols-2 lg:grid-cols-4 ">
            <div v-for="item in 4" :key="item">
              <div>
                <img
                  :src="`http://m28.aixdb.cn:81/img/s${item}.png`"
                  alt=""
                  class="w-full"
                />
              </div>
              <div class="text-center">
                <div class="sales-inner py-5">
                  <div class="text-base lg:text-[26px]">David</div>
                  <div class="sales-desc mt-2 text-[#00C0CC] text-sm lg:text-xl">
                    sales director
                  </div>
                  <div class="mt-5">
                    <a href="#" v-for="i in 3" :key="i" class="text-[#333] inline-block px-1">
                      <img
                        :src="`http://m28.aixdb.cn:81/img/m${i}.png`"
                        alt=""
                        class="w-[25px] max-w-[100%] h-auto inline-block "
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Message />
  </div>
</template>
<script>
import Video from "../../components/Video.vue";
export default {
  data() {
    return {
      list: [
        {
          name: "Enterprise Advantages",
          desc: "Huizhou Videya Technology Co., Ltd. is a professional manufacturer and supplier of dental instruments integrating R&D, production and marketing since 2011.",
        },
        {
          name: "Enterprise Advantages",
          desc: "Huizhou Videya Technology Co., Ltd. is a professional manufacturer and supplier of dental instruments integrating R&D, production and marketing since 2011.",
        },
        {
          name: "Enterprise Advantages",
          desc: "Huizhou Videya Technology Co., Ltd. is a professional manufacturer and supplier of dental instruments integrating R&D, production and marketing since 2011.",
        },
      ],
      contactData: [
        {
          icon: "http://m28.aixdb.cn:81/img/cont1.png",
          content: "029-89315850",
        },
        {
          icon: "http://m28.aixdb.cn:81/img/cont2.png",
          content: "Tennyson@somyshare.com",
        },
        {
          icon: "http://m28.aixdb.cn:81/img/cont3.png",
          content:
            "Building B, National Digital Publishing Base, Tiangu7th Road, Xian City",
        },
      ],
    };
  },
  components: { Video },
  async asyncData({ app, route, store }) {
    const currentMenu = store.state.currentMenu;
       // 获取所有 contact-us 栏目
    const contactUsMenus = store.state.menu.filter((m) => m.type === 'contact');

       // 获取当前视图对象数据
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
    const currentVO = getCurrentVO(contactUsMenus, route.path);
    return {
      currentMenu: currentMenu || {},
      currentVO: currentVO ?? {},
    };
  },
};
</script>
<style scoped lang='less'>
.sales-inner {
  transition: all 0.3s ease;
}
.sales-ul > div:hover .sales-inner {
  background-color: #00c0cc;
  color: #fff;
  transform: translate(0, -30px);
  .sales-desc{
     color: #fff;
  }
}
</style>