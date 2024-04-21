<script setup>
import {ref} from "vue";

import setting from "../src/components/setting.vue";

let coin = ref(114514);
let if_setting_open = ref(false);


</script>

<template>
    <setting v-if="if_setting_open" @setting_close="() => {if_setting_open = false}"/>
    
    <div style="height: 100px;"></div>

    <div id="head">
        <div id="per_2">足迹地图
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

    <div id="map_1">
        <div id="map_1_1">
            <div style="left: 70%;top: 40%;"></div>
            <div style="left: 55%;top: 70%;"></div>
        </div>
        <div id="map_1_2" @click=""></div>
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

#map_1{
    width: 100%;
    display: flex;
    align-items: flex-end;
}

#map_1_1{
    width: 70%;
    height: 60vw;
    background-image: url("../public/cn_map.png");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center center;
    position: relative;
}

#map_1_1>*{
    width: 30px;
    height: 60px;
    position: absolute;
    background-image: url("../public/地点.png");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
}

#map_1_2{
    width: 15%;
    height: 40vw;
    background-image: url("../public/女1Q.png");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center center;
}
</style>