<template>
  <div class="my-20">
    <div class=" px-7 w-full lg:max-w-[1542px] m-auto">
      <div class="group/1">
        <div class="font-semibold text-4xl">ADVANTAGE PRODUCTS</div>
        <div class="font-normal text-xl text-[#666666] mt-10">
          This is our advantageous product
        </div>
      </div>
      <div class="product_item  lg:grid grid-cols-3 gap-4 ">
        <ProductItem v-for="(item, index) in list" :key="index" :data="item" :type="type" :isDec='true'/>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props:['type','hotProductClass'],
  computed:{
    list(){
      if (this.type=='product') {
        this.hotProductClass.map((element) => element.showPic=element.typePic)
      }else{
        this.hotProductClass.map((element) => {
          element.showPic=element.knowledgePic
          element.name_ch=element.name
          })
      }
      
      return  this.hotProductClass
    }
  },
  data() {
    return {
    };
  },
  methods: {},
};
</script>
<style lang="less" scoped>
</style>
