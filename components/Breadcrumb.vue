<template>
  <div class="relative text-[14px] text-[#333] mt-[12%]">
    <img :src="bannerImg" alt="" class="banner-list-img w-full h-auto" />
    <div class=" hidden lg:block absolute top-0 w-full">
      <div class="px-7 w-full lg:max-w-[1542px] m-auto py-6">
        <a href="/" class="text-[#999]">Home</a>
        <a v-if='superiorMenu' class="text-[#999]" :href="superiorMenu?.path"><i class="el-icon-arrow-right text-[#999]"></i>{{superiorMenu?.name_ch}}</a>
        <span><i class="el-icon-arrow-right text-[#999]"></i> {{ currentMenu?.name_ch }}</span>
      </div>
    </div>
    <div class="absolute top-[55%] translate-y-[-50%] w-full">
      <div class="px-7 w-full lg:max-w-[1542px] m-auto py-[25px]">
        <div class="banner-list-tit">{{ newCurrentMenu }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["bannerImg", "currentMenu",'superiorMenu'],
  computed:{
    newCurrentMenu(){
      const index = this.currentMenu?.type?.indexOf("detail")
      if(index!==-1){
        return  this.currentMenu?.type?.substring(0, index);
      }else{
        return this.currentMenu?.name_ch
      }
    }
  },
  mounted() {
  },
};
</script>

<style lang='less' scoped>
.banner-list-tit {
  display: inline-block;
  font-size: 108px;
  text-transform: uppercase;
  font-family: Impact;
  text-transform: uppercase;
  -webkit-text-fill-color: transparent;
  background: rgba(142, 162, 163, 1) url('http://m28.aixdb.cn:81/img/list-bj.png') no-repeat left top;
  background-size: auto auto;
  background-clip: text;
}
@media (max-width:1024px){
    .banner-list-img{
        aspect-ratio: 750 / 200;
        object-fit: cover;
    }
}
</style>