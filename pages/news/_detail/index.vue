<template>
  <div>
    <Breadcrumb
      bannerImg="http://m28.aixdb.cn:81/img/banner-list2.png"
      :currentMenu="newsMenu"
    />
    <div class="news">
      <div class="px-6.5 w-full lg:max-w-[1542px] m-auto py-6">
        <div class="pt-10 w-full lg:pt-20 lg:flex justify-between">
          <div class="news_l hidden lg:block lg:w-[404px]">
            <div
              class="hidden pb-10 lg:block"
              style="border-bottom: 1px solid #ddd"
            >
              <div
                style="border-bottom: 1px solid #ddd"
                class="text-[26px] font-medium pb-5"
              >
                News Tags
              </div>
              <ul class="pro_li_ul">
                <li v-for="item in newsTag" :key="item" class="mt-6">
                  <a href="#" class="py-1 text-xl">{{ item }}</a>
                </li>
              </ul>
            </div>
            <div class="pb-10" style="border-bottom: 1px solid #ddd">
              <div
                style="border-bottom: 1px solid #ddd"
                class="text-[26px] font-medium pb-5 mt-10"
              >
                Advantage Products
              </div>
              <div>
                <div
                  v-for="(item, index) in hotProducts"
                  :key="index"
                  :class="`mt-[30px] w-full  lg:px-0 px-3`"
                >
                  <a
                    :href="item.path"
                    :class="`no-underline text-[#333] lg:grid grid-cols-2 gap-4 `"
                  >
                    <div class="overflow-hidden relative lg:bg-[#f8f8f8]">
                      <img
                        :src="`${$config.IMAGE_BASE_URL}${item.showPic}`"
                        alt=""
                        class="w-[100%] h-auto hover:scale-110 duration-300"
                      />
                      <div
                        v-if="item.labels && item.labels.includes('hot')"
                        class="pro-ihot text-lg text-[#00C0CC] w-[62px] h-[35px] bg-[#00c0cc26] inline-block justify-center items-center absolute top-10 right-0"
                      >
                        HOT
                      </div>
                    </div>
                    <div class="pt-[25px]">
                      <div class="text-xl font-medium line2">
                        {{ item.name }}
                      </div>
                      <div
                        v-if="item.productDes && item.productDes.length != 0"
                        class="line2 text-lg text-[#999999] mt-4"
                      >
                        {{ item.productDes }}
                      </div>
                      <div class="pro-ishow-more text-[#666666] text-lg mt-5">
                        <a
                          :href="item.path"
                          rel="nofollow"
                          class="text-[#666666]"
                        >
                          {{ "SHOW NOW" }}
                          <i class="el-icon-arrow-right text-[#666666]"></i>
                        </a>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div>
              <div class="py-10 bg-[#f7f7f7] lg:bg-white lg:py-20">
                <div class="px-7 w-full lg:px-0">
                  <div class="group/1">
                    <div class="font-semibold text-[26px]">Send Message</div>
                  </div>
                  <div class="product_item w-full">
                    <form action="" class="mt-7">
                      <input
                        class="w-full lg:flex-1"
                        type="text"
                        id="in-name"
                        placeholder="Your name:"
                        name="contact[name]"
                      />
                      <input
                        class="w-full mt-5 lg:flex-1 lg:mt-0"
                        type="text"
                        id="in-email"
                        placeholder="Email:"
                        name="contact[email]"
                      />
                      <textarea
                        class="w-full"
                        id="in-content"
                        cols="30"
                        rows="5"
                        placeholder="Content:"
                        name="contact[body]"
                      ></textarea>
                      <div
                        class="text-[#00C0CC] text-base mt-5 cursor-pointer bg-white h-[50px] leading-12 bg-transparent lg:text-lg lg:h-auto lg:leading-0"
                        onClick="onSubmit"
                      >
                        {{ "submit from".toUpperCase() }}
                        <i class="el-icon-arrow-right text-[#00C0CC]"></i>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="news_r lg:ml-20 lg:flex-1">
            <div class="text-4xl font-semibold">{{ newsDetail.name }}</div>
            <div class="text-[#00C0CC] text-xl mt-6">
              <span
                ><i class="el-icon-s-claim"></i>
                {{ newsDetail.createTime }}</span
              >
              <span class="ml-5">View：389</span>
            </div>
            <div class="text-xl text-[#333333] py-10">
              <div class="news_content" v-html="newsDetail.content"></div>
            </div>
            <!-- <div class="text-xl text-[#333333] py-10">
                <p>Urolithin a (hereinafter referred to as UA) is a metabolite of intestinal microorganisms and cannot be directly supplemented through dietary channels. However, its precursor ellagitannin is rich in pomegranate, strawberry and other fruits.<br>
                    The first encounter between humans and UA can be traced back to 2005. The research team of scientist CERD á first discovered the existence of urolithin A and confirmed that it was the work of gut microbiota.<br>
                    In the following ten years, the number of studies on UA has maintained a continuous growth trend, and its rich functions of anti-oxidation, anti-cancer, anti-inflammatory and anti-bacterial virus infection have been found one after another. This magical substance derived from nature has come into the view of more and more scientists.<br>
                    So, what is the mechanism behind these colorful functions of urolithin a? How does it help organisms fight against aging and prolong life?<br>
                    Contains plant complex anthocyanins:<br>
                    Anthocyanins are a group of flavonoid plant pigments that are responsible for the purple color of black rice, as well as several other plant foods such as blueberries and purple sweet potatoes. Studies have shown that anthocyanins have strong anti-inflammatory, antioxidant and anticancer effects. In addition, animal, test-tube.</p>
                <div class="grid grid-cols-4 gap-3">
                  <img src="http://m28.aixdb.cn:81/img/show1.png" class="block w-full" alt="">
                  <img src="http://m28.aixdb.cn:81/img/show2.png" class="block w-full" alt="">
                  <img src="http://m28.aixdb.cn:81/img/show3.png" class="block w-full" alt="">
                  <img src="http://m28.aixdb.cn:81/img/show4.png" class="block w-full" alt="">
                </div>
                <p class="text-[#00C0CC]">The nutritional benefits of black rice are as follows:</p>
                <div class="mt-2 flex justify-between lg:flex-row-reverse">
                    <img src="http://m28.aixdb.cn:81/img/show5.png" alt="" class="block w-[49.29%] ml-10">
                    <p>In addition to being a good source of protein, fiber, and iron, black rice is rich in a variety of antioxidants. Antioxidants are compounds that protect your cells from oxidative stress caused by molecules called free radicals. Studies have shown that black rice has the highest overall antioxidant capacity and activity. In fact, in addition to anthocyanins, black rice has been found to contain more than 23 plant compounds with antioxidant properties, including several types of flavonoids and carotenoids.</p>
                </div>
                <p>Helps you lose weight:</p>
                <p>Black rice is a good source of protein and fiber, both of which can help with weight loss by reducing appetite and increasing feelings of fullness. Anthocyanins found in black rice may help reduce weight and body fat percentage. While there is limited research on the role of black rice in weight loss in humans, it has been found that combining black rice with brown rice helps with weight loss. The women, who ate a mixture of brown and black rice up to 3 times a day on a calorie-restricted diet, lost significantly more weight and body fat than those who ate white rice.</p>
                <p>
                  <img src="http://m28.aixdb.cn:81/img/show6.png" alt="" class="w-full h-auto inline-block">
                </p>
            </div> -->
            <div class="flex">
              <span class="pr-4">share:</span>
              <Share />
            </div>
            <div
              class="pt-10 text-[#666666] text-xl mt-5"
              style="border-top: 1px solid #ddd"
            >
              <div class="flex justify-between">
                <div
                  class="flex-1 text-center border-solid border-1 border-[#ddd] lg:w-[35px] h-[35px] lg:text-left lg:border-none"
                >
                  <a :href="prev.path">
                    <div
                      :class="`lg:bg-[#F8F8F8] inline-flex justify-center items-center ${
                        prev.path ? 'text-[#00C0CC]' : 'text-[#666666]'
                      }`"
                    >
                      <i class="el-icon-arrow-left"></i
                      ><span class="block lg:hidden">Previous article</span>
                    </div>
                  </a>
                </div>
                <div class="hidden lg:block">
                  <a
                    href="#"
                    class="text-center w-full text-[#666666] hover:text-[#00C0CC]"
                    >{{ detail.name }}</a
                  >
                </div>
                <div
                  class="flex-1 text-center border-solid border-1 border-[#ddd] lg:w-[35px] h-[35px] lg:text-right lg:border-none"
                >
                  <a :href="next.path">
                    <div
                      :class="`lg:bg-[#F8F8F8] inline-flex justify-center items-center ${
                        next.path ? 'text-[#666666]' : 'text-[#00C0CC]'
                      }`"
                    >
                      <span class="block lg:hidden">Next Article</span
                      ><i class="el-icon-arrow-right"></i>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Message class="block lg:hidden" />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      selectedNumber: "Industry News",
      formInline: {},
      newsTag: ["Industry News", "Corporate News", "International News"],
    };
  },
  async asyncData({ app, route, store }) {
    // 产品菜单
    const newsMenu = store.state.menu.find(e => e.type === "news");
    // 新闻详情
    const routeId = route.name;
    const { detail } = app.$websiteDataHelper.getDetail("news", routeId);
    // 上一个、下一个
    const { prev, next } = app.$websiteDataHelper.getsblings(
      "news",
      detail.glid,
      detail.ID,
    );
    // 热门产品
    const hotProducts = app.$websiteDataHelper.hotProducts.slice(0, 3);

    return {
      hotProducts: hotProducts ?? [],
      newsMenu: newsMenu ?? {},
      newsDetail: detail ?? {},
      prev: prev ?? {},
      next: next ?? {},
    };
  },
  methods: {
    handleSelection() {
      // 使用 this.selectedValue 作为调用接口的参数
      console.log("Selected value for API call:", this.selectedValue);
      // 这里添加调用接口的代码
    },
    onSubmit() {
      console.log(this.formInline);
    },
    handleCurrentChange(val) {
      console.log(val);
    },
    prevChange(val) {
      console.log(val);
    },
    nextChange(val) {
      console.log(val);
    },
  },
};
</script>
<style scoped lang='less'>
.pro_li_ul > li > a {
  transition: all 0.3s ease;
  color: #333;
}
.pro_li_ul > li:hover a {
  border-bottom: 1px solid #00c0cc;
  color: #00c0cc;
}
.line2 {
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
}
.pro-ihot {
  text-align: center;
  line-height: 35px;
  &::after {
    content: "";
    display: block;
    width: 0;
    height: 0;
    border-bottom: 35px solid rgba(0, 192, 204, 0.15);
    border-left: 15px solid transparent;
    position: absolute;
    bottom: 0;
    left: 0;
    transform: translate(-100%, 0);
  }
}
.pro-ishow-more {
  &:hover {
    color: #00c0cc;
    i {
      color: #00c0cc;
    }
    &::after {
      background-color: #00c0cc;
    }
  }
  &::after {
    content: "";
    display: block;
    width: 26%;
    height: 1px;
    background-color: transparent;
    left: 0;
    bottom: 0;
  }
}
#in-name,
#in-email,
#in-tel,
#in-company {
  height: 55px;
  text-align: left;
}
#in-name,
#in-email,
#in-tel,
#in-company,
#in-content {
  color: #333;
  font-size: 22px;
  padding: 0 10px;
  border-top-color: transparent;
  border-right-color: transparent;
  border-left-color: transparent;
  border-bottom-color: #ddd;
}
#in-content {
  font-weight: 600;
  padding-top: 10px;
}
@media (max-width: 1024px) {
  #in-name,
  #in-email,
  #in-tel,
  #in-company,
  #in-content {
    font-size: 18px;
    background: transparent;
  }

  .pro-ishow-more {
    &::after {
      width: 15%;
    }
  }
}
::v-deep .el-pagination.is-background .el-pager li:not(.disabled).active {
  background-color: #00c0cc;
}
.main-rselect {
  border: 1px solid #00c0cc;
  height: 45px;
  width: 100%;
  transition: all 0.3s ease;
  font-size: 16px;
  color: #00c0cc;
  padding: 0 16px;
  margin-bottom: 25px;
}
</style>
