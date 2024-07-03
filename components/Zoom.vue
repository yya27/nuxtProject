<template>
    <div class="jqzoom">
      <img :src="imgObj.url"  alt="photo" :jqimg="imgObj.url" />
    </div>
</template>
<script>
export default {
  name: "Zoom",
  data() {
    return {};
  },
  props: ["skuImageList", "currentIndex"],
  computed: {
    imgObj() {
      return this.skuImageList[this.currentIndex] || [];
    },
  },
  mounted() {
    $(function () {
      $(".jqzoom").jqueryzoom({
        xzoom: 300, //放大图的宽度(默认是 200)
        yzoom: 300, //放大图的高度(默认是 200)
        offset: 20, //离原图的距离(默认是 10)
        position: "right", //放大图的定位(默认是 "right")
        preload: 1,
      });
    });
  },
  methods: {},
};
</script>
<style scoped lang='less'>
.big-img-box {
  width: 100%;
  height: 100%;
  margin: 0 0 20px;
  border: 1px solid #eee;
  position: relative;
  .imgWrap {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  .move {
    position: absolute;
    left: 0;
    top: 0;
    width: 200px;
    height: 200px;
    background: rgba(0, 0, 255, 0.15);
    cursor: move;
  }
  .bigPic {
    width: 355px;
    height: 377px;
    position: absolute;
    left: 600px;
    top: 0;
    border: 2px solid #f90;
    background-position: 0 0;
    background-size: 600% 600%;
    background-repeat: no-repeat;
    z-index: 2;
  }
}
</style>
