<template>
  <div class="my-20">
    <!-- Introduce企业介绍 -->
    <div
      class="enterprice-box"
      style="background-image: url('http://m28.aixdb.cn:81/img/ent-bj.png')"
    >
      <div class="px-7 w-full lg:max-w-[1542px] m-auto">
        <div
          class="flex justify-between w-full enterprice-box items-end pb-[80px] flex-wrap lg:flex-row-reverse"
          style="background-image: url('http://m28.aixdb.cn:81/img/ent-bj.png')"
        >
          <div class="int-video w-full lg:w-[54.34%] pt-[36.51%] relative">
            <div
              class="w-[100%] h-[100%] relative lg:absolute lg:top-0 lg:left-0"
            >
              <video width="100%" height="100%" controls ref="veo">
                <source
                  src="http://obbin.oss-cn-hangzhou.aliyuncs.com/无界.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
              <div
                v-if="isPost"
                class="w-full h-full absolute top-0 left-0"
                style="
                  background-image: url('http://m28.aixdb.cn:81/img/post.png');
                "
              ></div>
            </div>
            <div
              v-if="hidden"
              class="w-[80px] h-[100px] bg-cover cursor-pointer absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] z-10"
              style="
                background-image: url('http://m28.aixdb.cn:81/img/play.png');
              "
              @click="play"
            ></div>
            <div
              v-else
              class="pause-btn w-[80px] h-[100px] bg-cover cursor-pointer absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] z-10"
              style="
                background-image: url('http://m28.aixdb.cn:81/img/pause.png');
              "
              @click="pause"
            ></div>
          </div>
          <div class="w-full mt-4 lg:w-[40.46%]">
            <div class="font-semibold text-4xl">PRODUCT RECOMMENDATIONS</div>
            <div class="font-normal text-xl text-[#666666] mt-10">
              Here we will showcase some of our main products
            </div>
            <ul class="flex justify-between mt-[2.60vw] mb-[2.60vw]">
              <li class="list-none" v-for="item in 3" :key="item">
                <div class="text-[40px] font-semibold text-[#00C0CC]">200+</div>
                <div class="mt-5 text-xl text-[#999999]">
                  Enterprise<br />advantages
                </div>
              </li>
            </ul>
            <div class="pro-ishow-more text-lg mt-5">
                <img
                  src="../static/img/comp.png"
                  alt=""
                  class="w-[26px] align-bottom relative bottom-0 inline-block"
                />
                View More
                <i class="el-icon-arrow-right text-[#666666]"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- logistics 物流售后-->
    <div class="px-7 w-full lg:max-w-[1542px] m-auto">
      <div class="w-full flex justify-between items-end">
        <div class="w-full lg:w-[40.46%]">
          <div class="font-semibold text-4xl">Logistics Support</div>
          <div class="font-normal text-xl text-[#666666] mt-10">
            We have warehouses in 17 regions worldwide,providing excellent
            logistics.
          </div>
          <!-- pc -->
          <el-collapse accordion @change="handleChange" class="hidden lg:block mt-[30px]">
            <el-collapse-item class="pt-5" v-for="(item,index) in logisticsList" :key="index" :name="item.activeNames">
              <template slot="title"
                ><i
                  :class="`${
                    activeNames == item.activeNames
                      ? 'el-icon-remove'
                      : 'el-icon-circle-plus'
                  } text-[#00C0CC] mr-3 text-[32px]`"
                ></i>
                {{item.top}}
              </template>
              <div class="pb-5 text-xl text-[#999999] mt-3.5 ml-11">
                {{item.bottom}}
              </div>
            </el-collapse-item>
          </el-collapse>
          <!-- 移动端 -->
          <ul class="block lg:hidden border rounded-xl border-solid border-[#00C0CC] mt-6 p-6">
             <li v-for="(item,index) in logisticsList" :key="index" style="border-bottom: 1px solid #ddd;" class="pb-4">
                 <div class=" mr-3 text-base font-medium mt-4">{{item.top}}</div>
                 <div class=" text-sm text-[#999999] mt-4">{{item.bottom}}</div>
             </li>
          </ul>
        </div>
        <div class="hidden lg:block w-[54.34%] pt-[36.51%] relative">
          <img
            src="http://m28.aixdb.cn:81/img/people.png"
            alt=""
            class="w-[100%] h-[100%] absolute top-0 left-0"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script type='text/javascript'>
export default {
  data() {
    return {
      src: "http://obbin.oss-cn-hangzhou.aliyuncs.com/无界.mp4",
      hidden: true,
      isPost: true,
      activeNames: "",
      logisticsList:[
        {
          top:'Packaging and Storage',
          bottom:'The outer packaging has good sealing to prevent dust, moisture',
          activeNames:1
        },
        {
          top:' Warehousing Service',
          bottom:' 简化流程：设计简洁直观的操作流程；',
          activeNames:2
        },
        {
          top:'Ground Transport',
          bottom:'The outer packaging has g  用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；ure',
          activeNames:3
        },
        {
          top:' five Ground Transport',
          bottom:'  用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；',
          activeNames:4
        },
      ]
    };
  },
  methods: {
    handleChange(val) {
      console.log(val);
      this.activeNames = val;
    },
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
  mounted() {},
};
</script>
<style lang="less" scoped>
.pro-ishow-more {
  color: #00c0cc;
  i {
    color: #00c0cc;
  }

  &::after {
    content: "";
    display: block;
    width: 24%;
    height: 1px;
    background-color: #00c0cc;
    left: 0;
    bottom: 0;
  }
}
.pause-btn {
  display: none;
  &:hover {
    display: block;
  }
}
.enterprice-box {
  background-repeat: no-repeat;
  background-size: auto 100%;
  background-position: left center;
}
::v-deep .el-collapse-item__header {
  font-weight: 500;
  font-size: 24px;
  position: relative;
  cursor: pointer;
  padding-bottom: 24px;
}
::v-deep .el-collapse {
  border-top: none;
}
::v-deep .el-collapse-item__arrow {
  display: none !important;
}
@media (min-width: 1024px) {
}
@media (max-width: 1024px) {
  .int-video {
    padding-top: 0px;
  }
  .pro-ishow-more {
    width: 100%;
    border: 1px solid #dddddd;
    height: 50px;
    border-radius: 4px;
    font-size: 16px;
    padding-top: 8px;
    text-align: center;
    &::after {
      background-color: transparent;
    }
  }
}
</style>
