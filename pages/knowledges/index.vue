<template>
  <div>
    <Breadcrumb
      bannerImg="http://m28.aixdb.cn:81/img/banner-list2.png"
      :currentMenu="currentMenu"
    />
    <div>
      <div class="px-6.5 w-full lg:max-w-[1542px] m-auto py-6">
        <div
          class="pt-10 w-full lg:pt-20 lg:flex justify-between  lg:flex-row-reverse"
        >
          <div class="news_r  lg:ml-20 lg:flex-1">
            <div class="block lg:hidden">
                <select v-model="selectedNumber" class="main-rselect">
                  <option v-for="option in newsTag" :key="option" :value="option">
                    {{ option }}
                  </option>
                </select>
            </div>
            <ProductItem v-for="(item, index) in knowledgeList" :key="index" :data="item" type="NEWS" direction="right"/>
            <div class=" hidden lg:block text-center pt-[50px]">
              <el-pagination background layout="prev, pager, next" :page-size="12" :total="totalDataNumbers"   @current-change="handleCurrentChange"   @prev-click="prevChange"  @next-click="nextChange"></el-pagination>
            </div>
            <div class="block lg:hidden  mt-6 ">
                <a href="#" style="border: 1px solid #ddd;" class="h-[50px] w-full inline-flex justify-center text-base text-[#00C0CC] items-center cursor-pointer">
                  VIEW MORE  <i class="el-icon-arrow-down text-[#00C0CC] ml-1"></i>
                </a>
            </div>
          </div>
          <div class="news_l  w-full lg:w-[404px]">
            <div class="hidden pb-10 lg:block " style="border-bottom: 1px solid #ddd">
              <div style="border-bottom: 1px solid #ddd" class="text-[26px] font-medium pb-5">News Tags</div>
              <ul class="pro_li_ul">
                <li v-for="item in newsTag" :key="item" class="mt-6">
                  <a href="#" class="py-1 text-xl">{{ item }}</a>
                </li>
              </ul>
            </div>
            <div class="pb-10" style="border-bottom: 1px solid #ddd">
              <div style="border-bottom: 1px solid #ddd" class="text-[26px] font-medium pb-5 mt-10"> Advantage Products</div>
              <div>
                <div v-for="(item, index) in hotProducts" :key="index" :class="`mt-[30px] w-full  lg:px-0 px-3` ">
                    <a href="#" :class="`no-underline text-[#333] lg:grid grid-cols-2 gap-4 `">
                        <div class=" overflow-hidden relative lg:bg-[#f8f8f8]">
                            <img :src="`${$config.IMAGE_BASE_URL}${item.showPic}`" alt="" class="w-[100%] h-auto hover:scale-110 duration-300">
                            <!-- <div class="font-semibold text-[34px] text-[#00C0CC] max-w-[100px] absolute top-10 left-10">LOGO</div> -->
                            <div v-if="item.labels && item.labels.includes('hot')" class="pro-ihot text-lg text-[#00C0CC] w-[62px] h-[35px] bg-[#00c0cc26] inline-block justify-center items-center absolute top-10 right-0 lg:top-1">HOT</div>
                        </div>
                        <div class="pt-[25px]">
                            <div class="text-xl font-medium line2 ">{{item.name}}</div>
                            <div v-if="item.desc && item.desc.length != 0" class="line2 text-lg text-[#999999] mt-4 " >{{ item.desc }}</div>
                            <div class="pro-ishow-more text-[#666666] text-lg mt-5">{{'SHOW NOW' }}
                               <i class="el-icon-arrow-right text-[#666666]"></i> 
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
                         <input class="w-full lg:flex-1" type="text" id="in-name" placeholder="Fill in your name" name="contact[name]">
                         <input class="w-full mt-5 lg:flex-1 lg:mt-0" type="text" id="in-email" placeholder="Fill in your email address" name="contact[email]">
                         <textarea class="w-full" id="in-content" cols="30" rows="5" placeholder="Fill in your Content" name="contact[body]"></textarea>
                         <div class=" text-[#00C0CC] text-base mt-5 cursor-pointer bg-white h-[50px] leading-12  bg-transparent lg:text-lg lg:h-auto lg:leading-0 " onClick="onSubmit" >{{'submit from'.toUpperCase()}}
                              <i class="el-icon-arrow-right text-[#00C0CC] "></i> 
                          </div>
                      </form>
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      selectedNumber:'Industry News',
      formInline:{},
       hotProducts: [],
      newsTag: ["Industry News", "Corporate News", "International News"],
    };
  },
  async asyncData({ app, route, store }) {
       // 热门产品
    const hotProducts = app.$websiteDataHelper.hotProducts.slice(0, 3);

    const currentMenu = store.state.currentMenu;
     const routeId = route.meta[0].nodeid;
     // 知识列表数据
    const currentPage = route.meta[0].page ?? 1;
    const pageSize = 12;
    const { list, count } = app.$websiteDataHelper.getList(
      "knowledge",
      routeId,
      currentPage,
      pageSize
    );
    const knowledgeList = list.reverse();
    knowledgeList.map((item)=>{
      item.showPic =item.knowledgePic
      item.name_ch =item.name
      })

    return {
      currentMenu: currentMenu || {},
       hotProducts: hotProducts ?? [],
           knowledgeList: knowledgeList ?? [],
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
 #in-name,#in-email,#in-tel,#in-company{
          height: 55px;
          text-align: left;
         
}
 #in-name,#in-email,#in-tel,#in-company,#in-content{
            color: #333;
            font-size: 22px;
            padding: 0 10px;
          border-top-color: transparent;
          border-right-color: transparent;
          border-left-color: transparent;
          border-bottom-color: #ddd;
 }
#in-content{
  font-weight: 500;
  padding-top: 10px;
}
@media (max-width: 1024px) {
    #in-name,#in-email,#in-tel,#in-company,#in-content{
          font-size: 18px;
          background: transparent;
         
    }

    .pro-ishow-more{
      &::after{
        width: 15%;
      }
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
