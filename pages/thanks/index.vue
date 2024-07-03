<template>
  <div>
    <Breadcrumb
      bannerImg="http://m28.aixdb.cn:81/img/banner-list3.png"
      :currentMenu="currentMenu"
    />
    <div>
      <div class="px-7 w-full lg:max-w-[1542px] m-auto py-6">
        <div class="flex justify-center">
            <img src="/img/thanks.png" alt="" class="w-full h-auto lg:w-[50%]">
        </div>
        <h2 class="mt-20 lg:mt-12 text-4xl font-semibold text-center">Thanks</h2>
        <p class="text-3xl text-[#666666] mt-6 text-center">
          Sent successfully, we will contact you soon!
        </p>
        <div class="flex mt-6 justify-center">
            <a
              href="#"
              class="text-xl w-full inline-flex justify-center items-center font-semibold  h-[50px]  bg-[#00C0CC] text-white rounded-lg mr-4 lg:w-[250px]"
              >View Products</a
            >
            <a
              href="#"
              class="text-xl w-full inline-flex justify-center items-center font-semibold   h-[50px]  text-[#00C0CC] bg-white rounded-lg w-full lg:w-[250px]"
              style="border: 1px solid #dddddd"
              >Back To Home</a
            >
        </div>
      </div>
    </div>
     <Message/>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  async asyncData({ app, route, store }) {
    

    return {
      currentMenu:  {name_ch:'thanks'},
    };
  },
};
</script>
