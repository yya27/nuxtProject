<template>
  <div class="my-20  w-full">
    <div class="px-7 w-full lg:max-w-[1542px] m-auto  relative">
      <div class="group/1">
        <div class="font-semibold text-4xl">USER EVALUATE</div>
        <div class="flex justify-between align-end">
          <div class="font-normal text-xl text-[#666666] mt-10">
            Here is the customer's evaluation of us
          </div>
          <div class=" hidden lg:block pro-ishow-more text-[#666666] text-lg mt-5">
            View More
            <i class="el-icon-arrow-right text-[#666666]"></i>
          </div>
        </div>
      </div>
    </div>
    <div class="product_item w-[100%] pt-5">
      <div class="picMarquee-left w-full">
        <div class="relative overflow-hidden w-[100%]">
          <ul class="evaluate-ul">
            <li
              v-for="(item, index) in list"
              :key="index"
            >
              <a href="javascript:void(0)" class="eva-inner">
                <div class="font-medium text-2xl">{{ item.name }}</div>
                <div
                  class="font-light text-lg text-[#999999] mt-2.5 mb-[25px]"
                >
                  {{ item.time }}
                </div>
                <div class="eva-desc">{{ item.desc }}</div>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="picMarquee-right">
        <div class="relative overflow-hidden w-[100%]">
          <ul class="evaluate-ul">
            <li
              v-for="(item, index) in list"
              :key="index"
            >
              <a href="javascript:void(0)" class="eva-inner">
                <div class="font-medium text-2xl">{{ item.name }}</div>
                <div
                  class="font-light text-lg text-[#999999] mt-2.5 mb-[25px]"
                >
                  {{ item.time }}
                </div>
                <div class="eva-desc">{{ item.desc }}</div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [
        {
          time: "November 16,2023",
          name: "Beet Extract",
          desc: "Your companys products are highly professional, and the customer service personnel have a gentle attitude. They also provide detailed answers to questions.",
        },
        {
          time: "November 16,2023",
          name: "Hericium Erinaceus Extract",
          desc: "ffff",
        },
        {
          time: "November 16,2023",
          name: "Scutellaria Baicalensis Extract",
          desc: "ffffYour companys products are highly professional, and the customer service personnel have a gentle attitude. They also provide detailed answers to questions.",
        },
        {
          time: "November 16,2023",
          name: "Scutellaria Baicalensis Extract",
          desc: "ffff",
        },
      ],
    };
  },
  methods: {},
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
    width: 100%;
    height: 1px;
    background-color: #00c0cc;
    left: 0;
    right: 0;
    bottom: 0;
  }
}
.tempWrap {
  width: 100% !important;
}
.evaluate-ul {
  position: relative;
  overflow: hidden;
  margin: 0;
  padding: 0;
  left: 0px;
  .eva-inner {
    text-decoration: none;
    color: #333;
    display: blank;
    transition: all 0.3s ease;
    .eva-desc {
      display: -webkit-box;
      -webkit-box-orient: vertical;
      overflow: hidden;
      -webkit-line-clamp: 3;
    }
  }
}
.evaluate-ul > li {
    padding: 30px;
    float: left;
    list-style: none;
    border-radius: 10px;
    border: 1px solid #dddddd;
    overflow: hidden;
}
@keyframes slideLeft {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-700px);
  }
}
@keyframes slideRight {
  from {
    transform: translateX(-700px);
  }
  to {
    transform: translateX(0);
  }
}
@media (min-width: 1024px) {
  .evaluate-ul{
      width: 5112px;
  }
  .evaluate-ul > li {
    margin: 30px 10px 0px 10px;
    width: 617px;
  }
  .picMarquee-right .evaluate-ul {
    animation: 12s linear 2s infinite running slideRight;
  }
  .picMarquee-left .evaluate-ul {
    animation: 12s linear 2s infinite running slideLeft;
  }
}
@media (max-width: 1024px) {
  .evaluate-ul{
      width: 100%;
  }
  .evaluate-ul > li:not(:first-child) {
    display: none;
  }
  .evaluate-ul > li {
    width: calc(100% - 50px);
    margin: 20px 25px 0;
  }
}
</style>
