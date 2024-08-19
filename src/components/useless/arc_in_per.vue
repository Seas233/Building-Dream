<script setup>
import { useRouter } from 'vue-router';

const router = useRouter()
const goto_archive = () => {
    router.push('/archive')
}

import { defineProps } from 'vue';

const props = defineProps({
    num: {
        type: String,
        default: "1"
    },
    title:{
        type: String,
        default: "自定义标题"
    }
})
</script>

<template>
    <div id="a_1" @click="goto_archive">
        <div id="a_1_1">
            <div id="a_1_1_1">{{ num }}</div>
            <div id="a_1_1_2">{{ title }}</div>
        </div>

        <div id="a_1_2"></div>
    </div>
</template>

<style scoped>
#a_1{
    width: 100%;
    display: flex;
    flex-direction: row;
    margin-bottom: 50px;
}

#a_1_1{
    display: flex;
    flex-direction: column;
}

#a_1_1_1::before{
    content: "个人档案室";
    font-family: Inter;
    font-size: 40px;
    font-weight: 600;
    line-height: 60px;
    text-align: right;
    color: #D5EF80;
}

#a_1_1_1{
    font-family: Inter;
    font-size: 40px;
    font-weight: 600;
    line-height: 60px;
    text-align: right;
    color: #82D526;
}

#a_1_1_2{
    font-family: Inter;
    font-size: 32px;
    font-weight: 600;
    text-align: right;
    color: #82D526;
}

#a_1_2{
    width: 66px;
    height: 51px;
    background-image: url("/未命名作品\(1\)\ 拷贝.png");
    background-size: contain;
    background-position: center center;
    background-repeat: no-repeat;
}
</style>
