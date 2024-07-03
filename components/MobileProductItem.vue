<template>
  <div>
      <a :href="data.path" class="auto-cols-auto">
        <div class="relative">
          <img :src="`${$config.IMAGE_BASE_URL}${data.showPic}`" alt="" class="w-full h-full" />
          <div
            class="absolute top-4 left-4 text-[22px] text-[#00C0CC] font-semibold"
          >
            LOGO
          </div>
        </div>
        <div class="mt-5">
          <div class="text-base font-medium text-[#666666]">
             {{ data.name }}
          </div>
          <div></div>
          <div
            class="w-full h-[45px] rounded text-[#666666] inline-flex justify-center items-center mt-4"
            style="border: 1px solid #ddd"
          >
           <a :href="data.path"> SHOW NOW <i class="el-icon-arrow-right"></i></a>
           
          </div>
        </div>
      </a>
  </div>
</template>
<script>
export default {
  props: ["data"],
};
</script>
