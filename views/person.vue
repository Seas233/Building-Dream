<script setup>
import {ref} from "vue";

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
    <setting v-if="if_setting_open" @setting_close="() => {if_setting_open = false}"/>
    
    <div style="height: 100px;"></div>

    <div id="head">
        <div id="per_2">个人主页
            <div id="per_2_1"></div>
        </div>
        <div id="head_ri">

            <div id="head_ri_2">
                <div id="head_ri_2_1"></div>
                <div id="head_ri_2_2">{{ coin }}</div>
            </div>
            <div id="head_ri_1" @click="if_setting_open = true;"></div>
        </div>
    </div>

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
            <arc_in_per title="标题自拟" num=1 />
            <arc_in_per title="标题自拟" num=2 />
            <arc_in_per title="标题自拟" num=3 />
            <arc_in_per title="标题自拟" num=4 />
        </div>
    </div>
</template>

<style scoped>
#head{
    position: relative;
    display: flex;
    width: 100%;
    height: 70px;
    align-items: center;
}

#per_2{
    width: 100%;
    color: rgba(130, 213, 38, 1);
    /*font-family: Inter;*/
    font-size: 60px;
    font-weight: 600;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    overflow: visible;
}

#per_2_1{
    background-image: url("../public/underline_1.png");
    background-size: contain;
    width: 154.63px;
    height: 40px;
    position: absolute;
    top: 45px;
    z-index: 100;
}

#head_ri{
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: flex-end;
}

#head_ri_1{
    background-image: url("../public/设置.png");
    height: 60px;
    width: 60px;
    background-size: contain;
    background-position: center center;
    background-repeat: no-repeat;
    margin-right: 60px;
    margin-left: 60px;
    position: relative;
    z-index: 100;
}

#head_ri_2{
    height: 60px;
    width: 300px;
    border-radius: 30px;
    background-color: rgba(213, 239, 128, 1);
    display: flex;
    align-items: center;
}

#head_ri_2_1{
    height: 50px;
    width: 50px;
    margin-left: 10px;
    background-image: url("../public/钱币.png");
    background-position: center center;
    background-repeat: no-repeat;
    background-size: 100px;
    overflow: hidden;
    margin-right: 10px;
}

#head_ri_2_2{
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    /*font-family: Inter;*/
    font-size: 45px;
    font-weight: 600;
    line-height: 60px;
}

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
</style>
