<template>
    <div>
        <a href="#" v-for="item in 6" :key="item" class="pl-2">
                <img :src="`http://m28.aixdb.cn:81/img/me${item}.png`" alt="" class="max-w-[100%] h-auto inline-block">
        </a>
    </div>
</template>
<script>
export default {
    data(){
        return{}
    }
}
</script>