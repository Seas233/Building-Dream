<script setup>
import {ref} from "vue";

import setting from "../src/components/setting.vue";
import headline from "../src/components/headline.vue";

let if_setting_open = ref(false);

</script>

<template>
    <setting v-if="if_setting_open" @setting_close="() => {if_setting_open = false}"/>
    
    <headline title="足迹地图"/>

    <div id="map_1">
        <div id="map_1_1">
            <div style="left: 70%;top: 40%;"></div>
            <div style="left: 55%;top: 70%;"></div>
        </div>
        <div id="map_1_2" @click=""></div>
    </div>
</template>

<style scoped>
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