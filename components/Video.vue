<template>
  <div>
    <div class="w-[100%] h-[100%] relative lg:absolute lg:top-0 lg:left-0">
      <video width="100%" height="100%" controls ref="veo">
        <source :src="src" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div
        v-if="isPost"
        class="w-full h-full absolute top-0 left-0"
        style="background-image: url('http://m28.aixdb.cn:81/img/post.png')"
      ></div>
    </div>
    <div
      v-if="hidden"
      class="w-[80px] h-[100px] bg-cover cursor-pointer absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] z-10"
      style="background-image: url('http://m28.aixdb.cn:81/img/play.png')"
      @click="play"
    ></div>
    <div
      v-else
      class="pause-btn w-[80px] h-[100px] bg-cover cursor-pointer absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] z-10"
      style="background-image: url('http://m28.aixdb.cn:81/img/pause.png')"
      @click="pause"
    ></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hidden: true,
      isPost: true,
      src: "http://obbin.oss-cn-hangzhou.aliyuncs.com/无界.mp4",
    };
  },
  methods: {
    play() {
      this.$refs.veo.play();
      this.hidden = !this.hidden;
      this.isPost = false;
    },
    pause() {
      this.$refs.veo.pause();
      this.hidden = !this.hidden;
    },
  },
};
</script>

<style>
</style>