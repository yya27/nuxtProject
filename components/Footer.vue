 <template>
  <div>
    <div class="hidden lg:block bg-[#F8F7F7] py-5">
      <div class="px-7 max-w-[1542px] m-auto">
        <div class="group/1 w-full">
          <img
            class="max-w-[100%] h-auto"
            src="http://m28.aixdb.cn:81/img/part.png"
            alt=""
          />
        </div>
      </div>
    </div>
    <div
      style="background-image: url(http://m28.aixdb.cn:81/img/footer-bj.png)"
      class="footer-bg"
    >
      <div class="px-7 w-full lg:max-w-[1542px] m-auto">
        <div
          class="group/1 w-full flex justify-between flex-wrap py-15 lg:flex-row-reverse"
        >
          <div class="w-full lg:w-[66.73%]">
            <a href="#" class="block lg:hidden text-[#fff] no-underline text-center">
              <img  v-if="footerData.piclogo.logourl" :src="`${$config.IMAGE_BASE_URL}${footerData.piclogo.logourl}`" style="width: 25%; display: inline;">
              <div v-else
                class="font-semibold text-[32px] max-w-[161px] inline-block max-w-[94px]"
              >
                LOGO
              </div>
            </a>
            <!-- pc -->
            <div class="footer-pc">
              <div class="flex-1">
                <div class="text-[#FFFFFF] text-xl">
                  {{ "Quick Navigation".toUpperCase() }}
                </div>
                <div class="mt-10">
                  <a
                   v-for="(item, index) in footerData.menu"
                    :href="item.path"
                    class="block text-[#fff] mt-4 text-base"
                    :key="index"
                    >{{ item.name_ch }}</a
                  >
                  <a href="/sitemap.xml"  
                    class="block text-[#fff] mt-4 text-base">Sitemap</a>
                </div>
              </div>
              <div class="flex-1">
                <div class="text-[#FFFFFF] text-xl">
                  {{ "Products".toUpperCase() }}
                </div>
                <div class="mt-10">
                  <a
                    v-for="(item, index) in footerData.productsList"
                    :href="item.path"
                    class="block text-[#fff] mt-4 text-base"
                    :key="index"
                    >{{ item.name_ch }}</a
                  >
                </div>
              </div>
              <div class="flex-1">
                <div class="text-[#FFFFFF] text-xl">
                  {{ "CONTACT US".toUpperCase() }}
                </div>
                <!-- <div class="mt-10">
                  <div class="block text-[#fff] mt-4 text-base">Call us</div>
                  <div class="block text-[#fff] mt-7 text-4xl">
                    029-89315850
                  </div>
                  <div class="block text-[#fff] mt-4 text-base">
                    Tennyson@somyshare.com
                  </div>
                </div> -->
                <div class="mt-10" v-html="footerData.bci.content"></div>
              </div>
            </div>
            <!-- 移动端 -->
            <div class="w-full block lg:hidden">
              <el-collapse v-model="activeName" accordion>
                <el-collapse-item name="1">
                  <template slot="title">
                    <span class="text-[#FFFFFF] text-lg">
                      {{ "Quick Navigation".toUpperCase() }}</span
                    >
                  </template>
                  <div class="mt-10">
                    <a
                      href="#"
                      rel="nofollow"
                      class="block text-[#fff] mt-4 text-sm"
                      v-for="(item, index) in footerData.menu"
                      :key="index"
                      >{{ item.name_ch }}</a
                    >
                  </div>
                </el-collapse-item>
                <el-collapse-item name="2">
                  <template slot="title">
                    <span class="text-[#FFFFFF] text-lg">
                      {{ "Products".toUpperCase() }}</span
                    >
                  </template>
                  <div class="mt-10">
                    <a
                      href="#"
                      rel="nofollow"
                      class="block text-[#fff] mt-4 text-sm"
                      v-for="(item, index) in footerData.menu"
                      :key="index"
                      >{{ item.name_ch }}</a
                    >
                  </div>
                </el-collapse-item>
                <el-collapse-item title="效率 Efficiency" name="3">
                  <template slot="title">
                    <span class="text-[#FFFFFF] text-lg">
                      {{ "CONTACT US".toUpperCase() }}</span
                    >
                  </template>
                  <div class="mt-10">
                    <div class="block text-[#fff] mt-4 text-sm">
                      Call us
                    </div>
                    <div class="block text-[#fff] mt-7 text-2xl">
                      029-89315850
                    </div>
                    <div class="block text-[#fff] mt-4 text-sm">
                      Tennyson@somyshare.com
                    </div>
                  </div>
                </el-collapse-item>
              </el-collapse>
            </div>
          </div>
          <div class="w-full lg:w-[24.57%]">
            <a href="#" class="hidden lg:block text-[#fff] no-underline">
              <img  v-if="footerData.piclogo.logourl" :src="`${$config.IMAGE_BASE_URL}${footerData.piclogo.logourl}`" style="width: 50%;">
              <div v-else
                class="font-semibold text-[55px] max-w-[161px] inline-block lg:text-[32px] lg:max-w-[94px]"
              >
                LOGO
              </div>
            </a>
            <div class="mt-6 text-sm lg:text-base" >{{footerData.bi.content}}</div>
            <div class="flex items-center justify-center mt-[30px] lg:justify-start">
              <a
                href="#"
                class="footer-links"
                v-for="(item, index) in links"
                :key="index"
              >
                <img :src="item.url" alt="" />
              </a>
            </div>
          </div>
        </div>
        <div class="footer-bott">
          Copyright@2023-2026 All Rights Reserved. Powered by AI Seeker Leopard
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["footerData"],
  data() {
    return {
      activeName: "",
      links: [
        { url: "http://m28.aixdb.cn:81/img/m1.png", href: "" },
        { url: "http://m28.aixdb.cn:81/img/m2.png", href: "" },
        { url: "http://m28.aixdb.cn:81/img/m3.png", href: "" },
        { url: "http://m28.aixdb.cn:81/img/m4.png", href: "" },
        { url: "http://m28.aixdb.cn:81/img/m5.png", href: "" },
        { url: "http://m28.aixdb.cn:81/img/m6.png", href: "" },
      ],
    };
  },
  methods: {
    onSubmit() {
      console.log(this.formInline);
    },
  },
};
</script>
<style lang="less" scoped>
.footer-bg {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-color: #00c0cc;
  color: #fff;
}
.footer-links {
  margin-left: 10px;
  transition: transform 0.3s ease;
  transform-origin: center center;
  color: #fff;
  text-decoration: none;
  &:hover {
    transform: rotate(360deg);
  }
  img {
    border: none;
    display: inline-block;
    height: auto;
    max-width: 100%;
  }
}
.footer-bott {
  padding: 40px 0;
  position: relative;
  border-top: 1px solid rgba(255, 255, 255, 0.4);
  font-size: 16px;
  text-align: center;
}
::v-deep .el-collapse-item__header, ::v-deep .el-collapse-item__wrap{
    background-color: transparent;
}
::v-deep .el-collapse-item__wrap, ::v-deep .el-collapse ,::v-deep .el-collapse-item__header{
    border-bottom: none;
    border-top: none;
}
::v-deep .el-collapse-item__arrow{
    color: #fff;
}
@media (max-width: 1024px) {
    .footer-pc{
        display: none;
    }
    .footer-bott{
       font-size: 14px;
    }
}
@media (min-width: 1024px) {
     .footer-pc{
        display: block;
        display: flex;
        justify-content: space-between;
    }
}
</style>
