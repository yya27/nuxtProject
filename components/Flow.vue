<template>
  <div class="w-[100vw] relative bg-[#00C0CC] lg:bg-[#f8f8f8]">
    <div class="hidden lg:block">
      <!-- pc端 -->
      <div class=" w-[52.55%] absolute top-0 left-0">
        <div class="flow_left absolute top-0 left-0 w-[100%] h-auto">
          <el-carousel
            ref="myCarousel"
            arrow="always"
            :autoplay="false"
            indicator-position="none"
          >
            <el-carousel-item v-for="item in imgList" :key="item.key">
              <img
                alt="edeeded"
                :src="`${item.url}`"
                class="w-[100%] h-[100%]"
              />
            </el-carousel-item>
          </el-carousel>
          <div class="pre-plant">
            <div class="pre-plant-inner">
              <img
                src="../static/img/plant.png"
                class="inline-block relative z-1 max-w-[30%] top-[38%] left-[38%]"
                alt=""
              />
              <!-- <img src="../static/img/plant2.png" class="inline-block relative "  alt=""> -->
            </div>
          </div>
        </div>
      </div>
      <div class=" max-w-[1542px] m-auto flex justify-between">
        <div></div>
        <div class="flow_right w-[42.98%] my-[4.16vw]">
          <div>
            <el-steps :active="active" process-status="process">
              <el-step title="步骤 1" @click.native="changeStep(0)"></el-step>
              <el-step title="步骤 2" @click.native="changeStep(1)"></el-step>
              <el-step title="步骤 3" @click.native="changeStep(2)"></el-step>
              <el-step title="步骤 4" @click.native="changeStep(3)"></el-step>
            </el-steps>
          </div>
          <div class="mt-[3.64vw]">
            <el-carousel
              ref="infoCarousel"
              arrow="always"
              :autoplay="false"
              indicator-position="none"
            >
              <el-carousel-item v-for="item in infoList" :key="item.key">
                <h2 class="font-semibold text-4xl uppercase">
                  {{ item.head }}
                </h2>
                <p class="text-[color] text-xl mt-2.5 font-normal">
                  {{ item.info }}
                </p>
                <ul v-if="item.liList && item.liList.length != 0">
                  <li
                    class="list-none text-[22px] mt-5"
                    v-for="(item, index) in item.liList"
                    :key="index"
                  >
                    <i class="el-icon-success text-[#00C0CC]"></i> {{ item }}
                  </li>
                </ul>
              </el-carousel-item>
            </el-carousel>
          </div>
        </div>
      </div>
    </div>

    <!-- 移动端 -->
    <div class="block px-7 py-10 text-white lg:hidden">
      <div>
        <div class="pre-plant-lg lg:pre-plant">
          <div class="pre-plant-inner-lg lg:pre-plant-inner">
            <img
              src="../static/img/plant2.png"
              class="inline-block relative z-1 max-w-[30%] top-[38%] left-[38%]"
              alt=""
            />
          </div>
        </div>
        <div></div>
      </div>
      <div class="mt-[1.64vw]">
        <div class="w-full">
          <div v-swiper="SwiperOption" class="swiper-container">
            <div class="swiper-wrapper">
              <div
                class="swiper-slide relative"
                v-for="(item, index) of infoList"
                :key="index"
              >
                <div class="text-[26px] pb-8 ml-20 font-medium">
                  {{ item.top }}
                </div>
                <h2 class="font-semibold text-4xl uppercase">
                  {{ item.head }}
                </h2>
                <p class="text-[color] text-xl mt-2.5 font-normal">
                  {{ item.info }}
                </p>
                <ul v-if="item.liList && item.liList.length != 0">
                  <li
                    class="list-none text-[22px] mt-5"
                    v-for="(item, index) in item.liList"
                    :key="index"
                  >
                    <i class="el-icon-success text-white ]"></i> {{ item }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next text-white bg-none"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: [],
  data() {
    return {
      active: 0,
      imgList: [
        { url: require("/static/img/raw.png"), key: 0 },
        { url: require("/static/img/pro1.png"), key: 1 },
        { url: require("/static/img/raw.png"), key: 2 },
        { url: require("/static/img/raw.png"), key: 3 },
      ],
      infoList: [
        {
          top: "define",
          head: "Raw Material Preparation",
          info: "We use high-quality and fresh plant materials as extraction materials, and process them through cleaning, impurity removal, and crushing to make them easier to extract.We use high-quality and fresh plant materials as extraction materials, and process them through cleaning.",
          liList: [
            "Raw Materials",
            "Greenhouse cultivation",
            "24-hour Maintenance By Professional Workers",
          ],
          key: 0,
        },
        {
          top: "fdfgfggg",
          head: "Raw Materialration",
          info: "We use high-quality anthem through cleaning.",
          liList: [],
          key: 1,
        },
        {
          top: "rfryhtyuyu",
          head: "Raw Matrfrfgtrgtrtyhythyhyyherialration",
          info: "We use high-quality anthem through cleaning.",
          key: 2,
        },
        {
          top: "rererttytyuyuuy",
          head: "trgtrggttjjyujuyjjRaw Materialration",
          info: "We use high-quality anthem through hhhhcleaning.",
          liList: ["a", "b", "c", "d"],
          key: 3,
        },
      ],
      SwiperOption: {
        slidesPerView: 1,
        spaceBetween: 10,
        loop: false,
        // navigationShow:false,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        autoplay: false,
      },
    };
  },
  methods: {
    changeStep(e) {
      console.log(e, "e");
      this.active = e;
      this.$refs.myCarousel.setActiveItem(e);
      this.$refs.infoCarousel.setActiveItem(e);
    },
  },
};
</script>
<style lang="less" scoped>
.pre-plant {
  width: 153px;
  height: 153px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 0;
  transform: translate(25%, 0);
  top: 60%;
  z-index: 10;
}
.pre-plant-lg {
  width: 66px;
  height: 66px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 16px;
  transform: none;
  top: 40px;
  z-index: 10;
}
.pre-plant-inner {
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(0, 192, 204, 0.1);
  border-radius: 50%;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  &::after {
    content: "";
    width: 60%;
    height: 60%;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    left: 50%;
    background: rgba(0, 192, 204, 1);
  }
  &::before {
    content: "";
    width: 80%;
    height: 80%;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    left: 50%;
    background: rgba(0, 192, 204, 0.2);
  }
}
.pre-plant-inner-lg {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  &::after {
    content: "";
    width: 60%;
    height: 60%;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    left: 50%;
    background: #ffffff;
  }
  &::before {
    content: "";
    width: 80%;
    height: 80%;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    left: 50%;
    background: rgba(0, 192, 204, 0.2);
  }
}
.flow_left {
  ::v-deep .el-carousel__container {
    height: 700px;
  }
}
.flow_right {
  ::v-deep .el-carousel__container {
    height: 420px;
  }
}
::v-deep .el-carousel__arrow {
  display: none !important;
}
::v-deep .el-step__icon .el-step__icon-inner {
  display: none;
}
::v-deep .el-step__head.is-process {
  border-color: rgba(0, 192, 204, 1);
  .el-step__line {
    background: linear-gradient(90deg, #00c0cc 0%, #999999 100%);
  }
}
::v-deep .el-step__title.is-process {
  color: rgba(0, 192, 204, 1);
}
::v-deep .el-step__head.is-finish {
  border-color: rgb(192, 196, 204);
}
::v-deep .el-step__title.is-finish {
  color: rgb(192, 196, 204);
}
::v-deep .swiper-button-next,
.swiper-button-prev {
  width: 45px;
  height: 45px;
  border-radius: 5px;
  border: 2px solid #ffffff;
  justify-content: center;
  margin: 0;
  transform: none;
  color: #ffffff;
  background: #00c0cc;
  align-items: center;
  cursor: pointer;
  top: 45px;
  &::after {
    font-size: 25px !important;
  }
}
::v-deep .swiper-button-prev.swiper-button-disabled,
.swiper-button-next.swiper-button-disabled {
  color: #00c0cc;
  background: #ffffff;
  opacity: 1;
}
::v-deep .swiper-button-prev {
  left: 85%;
}
</style>