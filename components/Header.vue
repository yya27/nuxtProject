<template>
  <header class="pf top-0 w-full absolute z-999">
    <div :class="`head  ${$route.path === '/' || 'bg-[#fff]'}`">
      <div class="w-full bg-[#E0FAFF] leading-[48px]">
        <div
          class="sm:px-5 lg:px-[30px] xl:px-[40px] 2xl:px-[50px] text-header-text lg:flex items-center justify-center mx-auto"
        >
          <div class="flex items-center justify-center gap-2 text-header-text">
            <div
              v-for="(item, index) in baseInfo.email"
              :key="index"
              class="lg:text-lg"
            >
              <a
                :href="`mailto:${item || 'tennyson@somyshare.com'}`"
                class="text-header-text hover:underline"
                >{{ item || "tennyson@somyshare.com" }}</a
              >
              <span v-if="baseInfo.email.length > 1">/</span>
            </div>
          </div>
          <div />
        </div>
      </div>
      <!-- 菜单 -->
      <div class="nav">
        <nav
          :class="`grid grid-cols-[60px_1fr_60px] lg:grid-cols-[130px_1fr_200px] xl:grid-cols-[200px_618px_200px] justify-between  lg:gap-[30px] md:gap-[15px] md:grid-cols-[130px_1fr_40px] 2xl:gap-[140px] sm:px-5 lg:px-[30px] xl:px-[40px] 2xl:px-[50px]  mx-auto pl-[15px] pr-[30px] nav`"
        >
          <div
            class="w-full lg:py-[30px] flex lg:justify-start justify-center sm:py-[15px] px-[15px]"
          >
            <!-- <img v-if="headerData?.piclogo?.logourl1" :src="`${$config.IMAGE_BASE_URL}${headerData?.piclogo?.logourl || '/img/logo.png'
        }`" alt="logo" sizes="(max-width: 436px) 100vw, 436px"
        class="lg:max-w-[129px] h-full md:max-w-[200px] w-[95px]" /> -->
            <span class="max-w-[129px] text-[44px] font-semibold text-[#00C0CC]"
              >LOGO</span
            >
          </div>
          <!-- logo图标 -->
          <!-- 移动端 search、menu图标-->
          <div
            class="my-[15px] flex justify-end items-center pr-5 lg:hidden block"
          >
            <i
              class="el-icon-search cursor-pointer w-[29px] h-[29px]"
              @click="updataIsshow"
            ></i>
          </div>
          <div class="block py-[15px] lg:hidden" @click="updataIsMenu">
            <div class="h-full flex" style="padding-top: 8px">
              <div
                class="i-la:bars w-[30px] h-[31px] text-header-text cursor-pointer"
              />
            </div>
          </div>
          <!-- 移动端 -->
          <!-- Search框 -->
          <div
            :class="`lg:block new-industry-card col-span-1 col-span-3 has-[.head-brs-val:focus]:opacity-100 lg:col-auto  lg:my-[30px] my-[15px] lg:mr-0 mr-[30px] rounded-2xl  opacity-30 focus:opacity-100   ${
              isShow ? 'block' : 'hidden'
            }`"
          >
            <div
              class="w-full h-full flex justify-center items-center px-[15px]"
            >
              <div class="flex gap-[3px] w-full p-[15px] items-center lg:p-0">
                <i class="el-icon-search text-xl leading-6"></i>
                <input
                  type="text"
                  placeholder="Search for what you want to search for..."
                  class="head-brs-val w-full border-transparent bg-transparent text-header-text ml-5 text-xl"
                />
              </div>
            </div>
          </div>
        
          <!-- language -->
          <div
            class="nav_language hidden lg:block new-industry-card cursor-pointer rounded-2xl lg:my-[30px] my-[15px] text-white"
          >
            <div class="h-full flex items-center justify-center">
              <div
                class="i-la:globe-europe w-[21px] h-[20px] text-header-text"
              />
              <Language
                :headerData="headerData"
                @updataShow="updataShow"
                :isShow="languageIsShow"
              />
              <div class="i-la:angle-down w-[16px] h-[10px] text-header-text" />
            </div>
          </div>
        </nav>
        <!-- menu -->
        <div
          class="hidden lg:block relative inset-0 left-[-1000px] lg:left-0 w-[60%] h-[80vh] bg-[#222] lg:w-auto lg:h-auto lg:relative lg:bg-transparent transition-left duration-300 nav-menu-container"
        >
          <div class="nav_menu flex justify-center">
            <div
              class="w-[618px] flex flex-col lg:flex-row items-center justify-between leading-[48px] lg:mt-0 mt-10 2xl:px-5"
            >
              <div
                v-for="item in headerData.menu"
                :key="item.id"
                :class="`${show.includes(item.path) ? 'static' : 'relative'} `"
                class="group/1 lg:py-6 py-[0] lg:w-auto w-full lg:px-0 lg:border-transparent px-5"
              >
                <div class="text-base flex items-center justify-between gap-2">
                  <a
                    :href="item.path"
                    :class="`inline-block ${
                      item.path === $route.path
                        ? show.includes(item.path)
                          ? 'text-[#00C0CC] select-menu1'
                          : 'text-[#00C0CC] select-menu'
                        : 'text-[#000000]'
                    }  group-hover/1:text-[#00C0CC] drop-tab `"
                    >{{ item.name_ch }}
                  </a>
                  <div
                    :class="`i-la:angle-down w-[20px] h-[20px] text-header-text transition-transform duration-300  group-hover/1:rotate-180 `"
                    v-if="item?.children && item.children.length"
                  />
                </div>
                <div
                  v-if="item?.children && item.children.length"
                  :class="`w-full lg:hidden lg:bg-white z-10 relative lg:absolute left-0 top-18 lg:opacity-0 z-10 ltransition-opacity duration-300  group-hover/1:block  group-hover/1:opacity-100`"
                >
                  <MenuItem
                    :subItem="item.children"
                    :show="show.includes(item.path)"
                    :contentData="headerData.knowledge"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          v-if="isMenu"
          class="fixed inset-0 top-0 left-[40%] w-[60%] h-[100vh] bg-[#00C0CC] text-white pt-5 lg:hidden"
        >
          <div class="lg:hidden block pl-5"  @click="updataIsMenu">
              <div class="i-la:times w-[30px] h-[31px]"></div>
          </div>
          <div
            v-for="item in headerData.menu"
            :key="item.id"
            class="group/1 py-6 w-full  border-b-solid border-1 border-white"
          >
            <div class="text-base flex items-center justify-between gap-2 px-5">
              <a
                :href="item.path"
                :class="`inline-block text-[#ffffff]`"
                >{{ item.name_ch }}
              </a>
              <div
                :class="`i-la:angle-down w-[20px] h-[20px] text-header-text transition-transform duration-300  group-hover/1:rotate-180 `"
                v-if="item?.children && item.children.length"
              />
            </div>
              <div
                  v-if="item?.children && item.children.length"
                  :class="`px-5 bg-[#eee] w-full hidden lg:opacity-0 z-10 ltransition-opacity duration-300  group-hover/1:block  group-hover/1:opacity-100`"
                >
                  <div v-for="(v,subIndex) in item?.children" :key="subIndex"  class="py-4 text-base flex items-center ">
                    <a :href="v.path" :class="`inline-block text-[#333]`">{{v.name_ch}}</a>
                  </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
<script>
export default {
  props: ["baseInfo", "headerData", "knowledge"],
  data() {
    return {
      isShow: false,
      isMenu: false,
      languageIsShow: true,
      show: ["/products"],
    };
  },
  methods: {
    updataIsshow() {
      this.isShow = !this.isShow;
    },
    updataIsMenu() {
      this.isMenu = !this.isMenu;
    },
    updataShow() {
      this.languageIsShow = !this.languageIsShow;
    },
  },
};
</script>
<style lang="less" scoped>
header {
  .head {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 999;
  }
}
.create-gradient-line(@width, @height, @color, @opacity) {
  position: relative;

  &::after {
    content: "";
    display: block;
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    height: 2px;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(248, 248, 248, 0.3),
      transparent
    );
    opacity: 0.3;
  }
}
.drop-tab {
  z-index: 9;
  &:hover {
    a::after {
      content: "";
      display: block;
      height: 20px;
      // background: url(../static/img/nav.png) no-repeat center bottom;
      bottom: 0px;
      left: 50%;
      transform: translate(-50%, 0);
      position: absolute;
      width: 100%;
      transition: width 0.3s ease;
      background-size: 100% 100%;
      background: url(../static/img/nav.png) no-repeat center bottom;
    }
  }
}
.select-menu::after {
  content: "";
  display: block;
  height: 20px;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 0);
  position: absolute;
  width: 100%;
  transition: width 0.3s ease;
  background-size: 100% 100%;
  background: url(../static/img/nav.png) no-repeat center bottom;
}
.select-menu1::after {
  content: "";
  display: block;
  height: 20px;
  bottom: 0;
  left: 46.5%;
  transform: translate(-50%, 0);
  position: absolute;
  width: 100%;
  transition: width 0.3s ease;
  background-size: 100% 100%;
  background: url(../static/img/nav.png) no-repeat center bottom;
}

.nav {
  .create-gradient-line(100%, 2px, rgba(248, 248, 248, 0.3), 0.3);
  width: 100vw;
}
.new-industry-card {
  background: rgba(51, 51, 51, 0.05);
}
</style>