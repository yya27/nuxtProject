<template>
  <div>
    <div v-swiper="option" class="swiper-container">
      <div class="swiper-wrapper">
        <div
          class="swiper-slide relative"
          v-for="(item, index) of data"
          :key="index"
        >
          <ProductItem :data="item" type="NEWS" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props:['option','data'],
  data() {
    return {};
  },
};
</script>

<style>
</style>