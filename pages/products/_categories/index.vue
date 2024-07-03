<template>
  <div>
    <Breadcrumb
      bannerImg="http://m28.aixdb.cn:81/img/banner-list2.png"
      :currentMenu="currentMenu"
      :superiorMenu='productMenu'
    />
    <div>
      <div class="px-6.5 w-full lg:max-w-[1542px] m-auto py-6">
        <div
          class="pt-10 w-full lg:pt-20 lg:flex justify-between  lg:flex-row-reverse"
        >
          <div class="news_r  lg:ml-20 lg:flex-1">
            <div class="block lg:hidden">
                <select v-model="selectedNumber" class="main-rselect">
                  <option v-for="(item, index) in categories" :key="index.ID" :value="item.url">
                    {{ item.name_ch }}
                  </option>
                </select>
            </div>
            <div class="text-[30px] font-semibold">{{currentMenu.name_ch}}</div>
            <div class="my-5 text-xl" v-html="typeDes"></div>
            <div class="hidden lg:block ">
                <div class="grid grid-cols-3 gap-4 ">
                    <ProductItem v-for="(item, index) in productsList" :key="index" :data="item" type="NEWS" />
                </div>
            </div>
              <!-- 移动端 -->
            <div class=" grid grid-cols-2 gap-4 mt-5 lg:hidden ">
               <MobileProductItem v-for="(item,index) in productsList" :key="index" :data='item'/>
            </div>
            <div class="hidden lg:block text-center pt-[50px]">
              <el-pagination background layout="prev, pager, next" :page-size="12" :total="totalDataNumbers"   @current-change="handleCurrentChange"   @prev-click="prevChange"  @next-click="nextChange"></el-pagination>
            </div>
            <div class="block lg:hidden  mt-6 ">
                <a href="#" style="border: 1px solid #ddd;" class="h-[50px] w-full inline-flex justify-center text-base text-[#00C0CC] items-center cursor-pointer">
                  VIEW MORE  <i class="el-icon-arrow-down text-[#00C0CC] ml-1"></i>
                </a>
            </div>
          </div>
          <div class="news_l w-full lg:w-[404px]">
            <div class="hidden pb-10 lg:block " style="border-bottom: 1px solid #ddd">
              <div style="border-bottom: 1px solid #ddd" class="text-[26px] font-medium pb-5">Cstegories</div>
              <ul class="pro_li_ul">
                <li v-for="(item, index) in categories" :key="index.ID" class="mt-6">
                  <a :href="item.url" class="py-1 text-xl">{{ item.name_ch }}</a>
                </li>
              </ul>
            </div>
            <div class="pb-10" style="border-bottom: 1px solid #ddd">
              <div style="border-bottom: 1px solid #ddd" class="text-[26px] font-medium pb-5 mt-10"> Advantage Products</div>
              <div>
                <div v-for="(item, index) in hotProducts" :key="index" :class="`mt-[30px] w-full  lg:px-0 px-3` ">
                    <a :href="item.path" :class="`no-underline text-[#333] lg:grid grid-cols-2 gap-4 `">
                        <div class=" overflow-hidden relative lg:bg-[#f8f8f8]">
                            <img  :src="`${$config.IMAGE_BASE_URL}${item.showPic}`" data-src="/img/zhipu-fangji53266444263.webp" alt="" class="w-[100%] h-auto hover:scale-110 duration-300">
                            <!-- <div class="font-semibold text-[34px] text-[#00C0CC] max-w-[100px] absolute top-10 left-10">LOGO</div> -->
                            <div v-if="item.labels && item.labels.includes('hot')" class="pro-ihot text-lg text-[#00C0CC] w-[62px] h-[35px] bg-[#00c0cc26] inline-block justify-center items-center absolute top-10 right-0 lg:top-1">HOT</div>
                        </div>
                        <div class="pt-[25px]">
                            <div class="text-xl font-medium line2 ">{{item.name}}</div>
                            <div v-if="item.productDes && item.productDes.length != 0" class="line2 text-lg text-[#999999] mt-4 " >{{ item.productDes }}</div>
                            <div class="pro-ishow-more text-[#666666] text-lg mt-5">
                              <a :href="item.path" rel="nofollow" class="text-[#666666]">{{'SHOW NOW' }}
                               <i class="el-icon-arrow-right text-[#666666]"></i></a>
                            </div>
                        </div>
                    </a>
                </div>
              </div>
            </div>
            <!-- 询盘不用 -->
            <!-- <div class="hidden lg:block">
              <div class="py-10 bg-[#f7f7f7] lg:bg-white lg:py-20">
                  <div class="px-7 w-full lg:px-0">
                    <div class="group/1">
                      <div class="font-semibold text-[26px]">Send Message</div>
                    </div>
                    <div class="product_item w-full">
                      <el-form :model="formInline" class="demo-form-inline mt-7">
                          <el-form-item class="flex-1">
                            <el-input
                              v-model="formInline.name"
                              placeholder="Your name:"
                            ></el-input>
                          </el-form-item>
                          <el-form-item class="flex-1 text-right">
                            <el-input
                              v-model="formInline.email"
                              placeholder="Email:"
                            ></el-input>
                          </el-form-item>
                          <el-form-item >
                            <el-input
                              v-model="formInline.content"
                              placeholder="Content:"
                            ></el-input>
                          </el-form-item>
                          <div class=" text-[#00C0CC] text-base mt-5 cursor-pointer bg-white h-[50px] leading-12  bg-transparent lg:text-lg lg:h-auto lg:leading-0 " @click="onSubmit" >{{'submit from'.toUpperCase()}}
                              <i class="el-icon-arrow-right text-[#00C0CC] "></i> 
                          </div>
                      </el-form>
                    </div>
                  </div>
              </div>
            </div> -->
          </div>
        </div>
      </div>
       <Message />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      formInline:{},
      hotProducts: [],
      // newsTag: ["Industry News", "Corporate News", "International News",'Additives','Green Tea Extract','Plaw Materials For Health Products'],
    };
  },
  async asyncData({ app, route, store }) {
    const currentMenu = store.state.currentMenu;
    // 产品菜单
    const productMenu = store.state.menu.find((e) => e.type === "products");
      // 1、根据route.name，获取当前路由对应的数据
    const routeId = route.meta[0].nodeid;
     // 2、左侧产品分类列表数据
    const categories = app.$websiteDataHelper.getCategories("products", routeId);
      // 热门产品
    const hotProducts = app.$websiteDataHelper.hotProducts.slice(0, 3);
    
      // 4、渲染右侧数据
    const currentPage = route.meta[0].page ?? 1;
    const pageSize = 12;
    const { list, count } = app.$websiteDataHelper.getList(
      "products",
      routeId,
      currentPage,
      pageSize
    );
    const productsList = list.reverse();
    productsList.map((item)=>item.name_ch=item.name)
    return {
      currentMenu: currentMenu ?? {},
      productMenu: productMenu ?? {},
      categories: categories ?? [],
      selectedNumber:categories[0]?.url ?? '',
      hotProducts: hotProducts ?? [],
      typeDes: currentMenu.typeDes ?? "",
      productsList: productsList ?? [],
      totalDataNumbers: count ?? 0,
    };
  },
  methods: {
     handleSelection() {
      // 使用 this.selectedValue 作为调用接口的参数
      console.log("Selected value for API call:", this.selectedValue);
      // 这里添加调用接口的代码
    },
    onSubmit(){
        console.log(this.formInline);
    },
    handleCurrentChange(val){
      console.log(val);
    },
    prevChange(val){
      console.log(val);
    },
    nextChange(val){
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
.line2{
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
}
.pro-ihot{
    text-align: center;
    line-height: 35px;
    &::after {
        content: "";
        display: block;
        width: 0;
        height: 0;
        border-bottom: 35px solid rgba(0, 192, 204, .15);
        border-left: 15px solid transparent;
        position: absolute;
        bottom: 0;
        left: 0;
        transform: translate(-100%, 0);
    }
}
.pro-ishow-more{
    &:hover{
        color: #00C0CC;
        i{
          color: #00C0CC;  
        }
        &::after{
            background-color: #00C0CC;
        }
    }
    &::after{
    content: "";
    display: block;
    width: 26%;
    height: 1px;
    background-color: transparent;
    left: 0;
    bottom: 0;
    }
}
@media (max-width: 1024px) {
}
::v-deep .el-input__inner{
    font-size: 20px;
    color: #333;
    height: 50px;
    border-top: none;
    border-right: none;
    border-left: none;
    border-radius: 0;
    padding:0;
    // border-bottom: 2px solid #333;
}
::v-deep .el-input__inner{
        width: 100% !important;
        background-color: transparent;
    }
@media (max-width: 1024px) {
    ::v-deep .el-input__inner{
            width: 100% !important;
    }

    .pro-ishow-more{
      &::after{
        width: 15%;
      }
    }
    ::v-deep .el-input__inner{
      font-size: 18px;
      height: 50px;
    }
}
::v-deep .el-pagination.is-background .el-pager li:not(.disabled).active{
      background-color: #00C0CC;
}
.main-rselect{
    border: 1px solid #00C0CC;
    height: 45px;
    width: 100%;
    transition: all 0.3s ease;
    font-size: 16px;
    color: #00C0CC;
    padding: 0 16px;
    margin-bottom: 25px;
}
</style>
