<template>
    <div class="language">
        <div @click="$emit('updataShow')" class="language-conf">
            <span class="language-conf_text select-none">English</span>
        </div>
        <LanguageList :headerData="headerData" @updataShow="$emit('updataShow')" :isShow="isShow" />
    </div>
</template>

<script>
export default {
    props: ['isShow', 'updataShow', 'headerData'],
}
</script>

<style lang="less">
.language {
    cursor: pointer;

    &-conf {
        position: relative;
        display: flex;
        align-items: center;
        gap: 8px;

        &_text {
            text-transform: uppercase;
        }

        &:hover {

            .language-conf_icon,
            .language-conf_text {
                color: #9d8661;
            }
        }
    }
}
</style>