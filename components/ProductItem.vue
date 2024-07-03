<template>
<!-- `mt-[30px] ${type=='recommend'?'w-[333px]':'w-[32.55%]'} ` -->
    <div :class="`mt-[30px] w-full  lg:px-0 px-3` ">
        <a href="#" :class="`no-underline text-[#333] ${direction && direction=='right'?'lg:grid grid-cols-2 gap-4':''}`">
            <div class=" overflow-hidden relative lg:bg-[#f8f8f8]">
                <img :src="`${$config.IMAGE_BASE_URL}${data.showPic}`"
                 onerror='this.src="/img/errorImg.jpg"'
                alt="" class="w-[100%] h-auto hover:scale-110 duration-300">
                <!-- <div class="font-semibold text-4xl text-[#00C0CC] max-w-[100px] absolute top-5 left-5">LOGO</div> -->
                <div v-if="data.labels && data.labels.includes('hot')" class="pro-ihot text-lg text-[#00C0CC] w-[62px] h-[35px] bg-[#00c0cc26] inline-block justify-center items-center absolute top-5 right-0 ">HOT</div>
            </div>
            <div :class="`pt-[25px]  ${direction && direction =='right'?'flex flex-col justify-end':''} `">
                <div v-if="data?.createTime" class="text-lg text-[#999999] pb-5">{{ data.createTime }}</div>
                <div class="text-2xl font-medium truncate">{{data.name_ch}}</div>
                <div v-if="data.productDes && data.productDes.length != 0" :class="`text-xl text-[#999999] mt-4 ${direction && direction=='right'?'truncate3':'truncate'} `">
                    <div v-if="isDec" class="">{{data.productDes}}</div>
                    <div v-else  v-html="data.productDes"></div>
                </div>
                <!-- <div v-if="data.typeDes && data.typeDes.length != 0" :class="`text-xl text-[#999999] mt-4 ${direction && direction=='right'?'truncate3':'truncate'} `" >{{ data.typeDes }}</div> -->
                <div ><a class="pro-ishow-more text-[#666666] text-lg mt-5" :href="data.path">{{ type=='NEWS'? 'Read More':'SHOW NOW' }}
                   <i class="el-icon-arrow-right text-[#666666]"></i> </a>
                </div>
            </div>
        </a>
    </div>
</template>
<script>
export default {
    props:['data','type','direction','isDec'],
  data() {
    return {};
  },
  methods: {},
};
</script>
<style lang="less" scoped>
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
    .pro-ishow-more{
    &::after{
    width: 15%;
    }
}
}
.truncate3{
    overflow:hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 4;
    display: -webkit-box;
    -webkit-box-orient: vertical;
}
</style>
