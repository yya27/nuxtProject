<template>
  <div class="py-10 bg-[#f7f7f7] lg:bg-white lg:py-20">
    <div class="px-7 w-full lg:max-w-[1542px] m-auto">
      <div class="group/1">
        <div class="font-semibold text-4xl">ONLINE MESSAGE</div>
        <div class="font-normal text-xl text-[#666666] mt-10">
          Leave your basic information for us to contact you easily
        </div>
      </div>
      <div class="product_item w-full">
        
        <form  class=" mt-7">
          <div class="msg-row-top lg:flex justify-between mt-7">
            <input class="w-full lg:flex-1" type="text" id="in-name" placeholder="Fill in your name" name="contact[name]">
            <input class="w-full mt-5 lg:flex-1 lg:mt-0" type="text" id="in-email" placeholder="Fill in your email address" name="contact[email]">
          </div>
          <!-- <div class="msg-row-top lg:flex justify-between mt-7">
            <input class="w-full lg:flex-1" type="text" id="in-company" placeholder="Fill in your company" name="contact[company]" >
            <input class="w-full lg:flex-1" type="text" id="in-tel" placeholder="Fill in your tel" name="contact[phone]">
          </div> -->
          <div class="msg-row-top relative mt-7">
            <input class="w-full" id="in-content" type="text"  placeholder="Fill in your contents" name="contact[body]">
            <div class="pro-ishow-more text-[#00C0CC] text-base mt-5 cursor-pointer bg-white h-[50px] leading-12 text-center lg:absolute top-0 right-0 bg-transparent lg:text-2xl lg:h-auto lg:leading-0 lg:text-[#111111]" onclick="onSubmit" >{{'submit from'.toUpperCase()}}
                <i class="el-icon-right text-[#00C0CC] lg:text-[#111111]"></i> 
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
    };
  },
  methods: {
    onSubmit(){
        console.log(this.formInline);
    }
  },
};
</script>
<style lang="less" scoped>
.pro-ishow-more{
    &:hover{
        color: #00C0CC;
        i{
          color: #00C0CC;  
        }
       
    }
}
.msg-row-top{
    #in-name,#in-email,#in-tel,#in-company,#in-content{
          height: 55px;
          font-size: 22px;
          padding: 0 10px;
          color: #333;
          border-top-color: transparent;
          border-right-color: transparent;
          border-left-color: transparent;
          border-bottom-color: #ddd;
          text-align: left;
         
    }
     #in-name,#in-company{
      margin-right: 10px;
     }
}

@media (max-width: 1024px) {
.msg-row-top{
    #in-name,#in-email,#in-tel,#in-company,#in-content{
          height: 55px;
          font-size: 18px;
          background: transparent;
         
    }
     #in-name,#in-company{
      margin-right: 0;
     }
}
  .pro-ishow-more{
    border: 1px solid #ddd;
  }
}
</style>
