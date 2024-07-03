<template>
  <div class="w-full">
    <Header :headerData="$store.state.headerData" :baseInfo="$store.state.baseInfo" :bannerHeight='bannerHeight'/>
    <!-- <Nuxt :class="`${$route.path === '/' ? 'mt-[48px]' : 'lg:mt-[157px] mt-[107px]'}`" />

    <Wmkc :wmkcData="$store.state.wmkcData" />
    <Footer :footerData="$store.state.footerData" /> -->
    <Nuxt/>
    <Footer :footerData="$store.state.footerData"/>
    <Wmkc :wmkcData="$store.state.wmkcData" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      bannerHeight:'100%'
    }
  },
  methods: {
    handleScroll() {
  	  // 页面滑动的距离
      let scrollTop = document.documentElement.scrollTop
      this.bannerHeight=document.documentElement.clientHeight 
    },
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  head() {
    const WEB_SITE_URL = this.$config.WEB_SITE_URL;
    const routePath = this.$route.path;

    const languages = [
      "ar", "bg", "hr", "cs", "da", "nl", "fi", "fr", "de", "el", "hi", "it", "ja", "ko", "no",
      "pl", "pt", "ro", "ru", "es", "sv", "ca", "tl", "iw", "id", "lv", "lt", "sr", "sk", "sl",
      "uk", "vi", "sq", "et", "gl", "hu", "mt", "th", "tr", "fa", "af", "ms", "sw", "ga", "cy",
      "be", "is", "mk", "yi", "hy", "az", "eu", "ka", "ht", "ur", "bn", "bs", "ceb", "gu", "ha",
      "hmn", "ig", "jw", "kn", "km", "lo", "mi", "mr", "mn", "ne", "pa", "so", "ta", "te", "yo",
      "zu", "my", "ny", "kk", "mg", "ml", "si", "st", "su", "tg", "uz", "am", "co", "haw", "ku",
      "ky", "lb", "ps", "sm", "gd", "sn", "sd", "fy", "eo", "xh", "la", "en"
    ];

    const langLinks = languages.map(language => ({
      rel: "alternate",
      hreflang: language,
      href: language === 'en'
        ? `${WEB_SITE_URL}${routePath}`
        : `${WEB_SITE_URL}${routePath}`.replace(/\bwww\./, `${language}\.`)
    }));

    return {
      title: this.$route.meta?.title,
      htmlAttrs: {
        style: "overflow-x:hidden"
      },
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.$route.meta?.description,
        },
        {
          hid: "keywords",
          name: "keywords",
          content: this.$route.meta?.keywords,
        },
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: this.$store.state.favicon },
        { rel: "canonical", href: `${WEB_SITE_URL}${routePath}` },
        ...langLinks,
        {rel:'stylesheet',type:'text/css',href:'/css/jqzoom.css'}
      ],
      script: [
        { src: '/js/index.js', defer: true },
        { src: '/js/track.js', defer: true },
        { src: "/js/jquery.min.js" },
        { src: "/js/jquery.jqzoom.js" },
      ],
    }
  },
}
</script>
