<template>
    <div
        class="hidden lg:block fixed right-0 top-[50%] translate-y-[-50%] z-99 text-center">
        <div>
            <div v-for="(item, index) in data" :key="index"
                :class="`right-fixed group/wmkc my-[18px] p-[5px] rounded-s-3xl h-[54px] bg-[#00C0CC]`"  :data-type="item.track">
                <a :href="`${item.href}${wmkcData.contactShare[item.type] || ''}`" target="_blank" rel="nofollow">
                    <div class=" flex items-center text-[#fff]" :data-type="item.track">
                       <div :data-type="item.track" class="bg-white  h-[43px] w-[44px] rounded-full flex justify-center items-center mr-2"> <div :class="`${item.icon}  h-8 w-8 text-[#00C0CC] `" /></div>
                       <div :data-type="item.track" class="text-[#ffffff] text-base">{{ item.name }}</div>
                    </div>
                </a>
            </div>
        </div>
    </div>
</template>
<script>
const data = [
    {
        icon: 'i-la:envelope',
        name: "E-Mail",
        href: 'mailto:',
        type: 'email',
        track:'email'
    },
    {
        icon: 'i-la:whatsapp',
        name: "WhatsApp",
        href: 'https://web.whatsapp.com/send?l=en&amp;phone=',
        type: 'Whatsapp',
        track:'whatsApp'
    },
    {
        icon: 'i-la:weixin',
        name: "ＷeChat",
        href: 'weixin://dl/about',
        type: 'weixin'
    }
]
export default {
    props: ["wmkcData"],
    data() {
        return {
            data
        }
    }
}
</script>
<style scoped lang='less'>
.right-fixed {
  transform: translate(calc(100% - 55px), 0);
  transition: all  .3s  ease;
}
.right-fixed:hover {
  transform: translate(0, 0);
}

</style>