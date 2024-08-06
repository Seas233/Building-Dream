<script setup>
import {ref} from "vue";
import { useRouter } from 'vue-router';
import headline from "../src/components/headline.vue";

const router = useRouter()

import setting from "../src/components/setting.vue";
import arc_in_per from "../src/components/arc_in_per.vue";

let coin = ref(114514)
let if_setting_open = ref(false);
let name = ref("小丽")
let school = ref("山东大学")
let Personal_saying = ref("学无止境，气养浩然")
let self_introduction = ref("来自山东大学体育学院的大一学生")
</script>

<template>
    
    <div style="height: 70px;"></div>
    <setting v-if="if_setting_open" @setting_close="() => {if_setting_open = false}"/>
    
    <headline title="个人主页"/>

    <div style="height: 100px;"></div>

    
    <div id="per_3">
        <div id="per_3_1">
            <div id="per_3_1_1">{{ name }}</div>
            <div id="per_3_1_2">
                <div>个人简介</div>
            </div>

            <div style="height: 50px;"></div>

            <div class="per_3_1_t">学校：{{ school }}</div>

            <div class="per_3_1_t">个性签名：{{ Personal_saying }}</div>

            <div class="per_3_1_t">个人简介：{{ self_introduction }}</div>

        </div>

        <div id="per_3_2">
            <div></div>
        </div>
        
        <div id="per_3_3">
            <div id="per_3_3_1" @click="router.push('/map')">
                <div id="per_3_3_3">支 教 地 图</div>
                <div id="per_3_3_2"></div>
            </div>
            <arc_in_per title="标题自拟" num=1 />
            <arc_in_per title="标题自拟" num=2 />
            <arc_in_per title="标题自拟" num=3 />
            <arc_in_per title="标题自拟" num=4 />
        </div>
    </div>
</template>

<style scoped>
#per_3{
    width: 100%;
    height: 100vh;
    display: grid;
    grid-template-columns: 40% 35% 1fr;
}

#per_3_1{
    width: 100%;
    height: 100%;
    background-color: rgba(213, 239, 128, 1);
    border-radius: 0 2vw 2vw 0;
}

#per_3_1_1{
    display: flex;
    justify-content: center;
    margin-top: 40px;
    /*font-family: Inter;*/
    font-size: 60px;
    font-weight: 600;
    line-height: 60px;
    text-align: center;
    color: white;
}

#per_3_1_2{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 40px;
}

#per_3_1_2>*{
    width: 514px;
    height: 83px;
    border-radius: 41.5px;
    background-color: white;

    display: flex;
    align-items: center;
    justify-content: center;

    font-family: Inter;
    font-size: 50px;
    font-weight: 600;
    line-height: 60px;
    text-align: center;
    color: rgba(130, 213, 38, 1);

}

.per_3_1_t{
    font-family: Inter;
    font-size: 32px;
    font-weight: 600;
    line-height: 60px;
    text-align: left;
    margin-left: 50px;
    margin-right: 50px;
    color: white;
}

#per_3_2{
    width: 100%;
    height: 100%;
    position: relative;
}

#per_3_2>*{
    height: 80%;
    width: 100%;
    background-image: url("../public/女1成.png");
    background-size: contain;
    background-repeat: no-repeat;
    position: absolute;
    left: 10%;
    bottom: 0;
}

#per_3_3{
    width: 100%;
    height: 100%;
}

#per_3_3_1{
    display: flex;
    align-items: center;
    width: 100%;
    height: 100px;
    margin-bottom: 50px;
}

#per_3_3_2{ 
    background-image: url("../public/坐标\ 1.png");
    background-size: contain;
    background-repeat: no-repeat;
    width: 50px;
    height: 50px;
}

#per_3_3_3{
    font-family: Inter;
    font-size: 29px;
    font-weight: 600;
    line-height: 60px;
    text-align: right;
    color: #B5D051;
    margin-right: 20px;
    margin-left: 60px;
}
</style>
