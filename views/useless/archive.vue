<script setup>
import {ref} from "vue";
import { useRouter } from 'vue-router';

import setting from "../src/components/setting.vue";
import headline from "../src/components/headline.vue";

const router = useRouter()

let if_setting_open = ref(false);

let archive_number=ref(1)
</script>

<template>
    <div style="height: 70px;"></div>
    
    <setting v-if="if_setting_open" @setting_close="() => {if_setting_open = false}"/>
    
    <headline title="个人档案室"/>

    <div style="height: 100px;"></div>

    <div id="per_3">
        <div id="per_3_1">
            <div id="per_3_1_number_1" class="per_3_1_number">1</div>
            <div id="per_3_1_number_2" class="per_3_1_number">2</div>
            <div id="per_3_1_number_3" class="per_3_1_number">3</div>
            <div id="per_3_1_number_4" class="per_3_1_number">4</div>
            <div id="per_3_1_switch">点击切换其他档案室</div>
        </div>
        <div id="per_3_2">
            <div id="per_3_2_back"></div>
            <div id="per_3_2_back_number">{{ archive_number }}</div>
            <div id="per_3_2_container">
                <div id="per_3_2_file" @click="router.push('/article')">
                    <div>
                        <span>书中自有黄金屋</span>
                    </div>
                </div>
                <div id="per_3_2_file">
                    <div>
                        <span>书中自有黄金屋</span>
                    </div>
                </div>
                <div id="per_3_2_file">
                    <div>
                        <span>书中自有黄金屋</span>
                    </div>
                </div>
            </div>

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
    background-image: url("/underline_1.png");
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
    background-image: url("/设置.png");
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
    background-image: url("/钱币.png");
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
    width: 100vw;
    height: 100vh;
    display: grid;
    grid-template-columns: 15% 85% ;
}

#per_3_1{
    width: 100%;
    height: 100%;
    background-color: rgba(213, 239, 128, 1);
    border-radius: 0 2vw 2vw 0;
    position: relative;
}

.per_3_1_number{
    width: 5vw;
    height: 8vh;
    left: 2vw;
    position: absolute;
    background-color: #FFFFFF;
    border-radius: 4vw;
    color: #82D526;
    text-align: center;
    font-size: 6vh;
    line-height: 8vh;
    font-weight: 500;
}

#per_3_1_number_1{
    top: 20vh;
}
#per_3_1_number_2{
    top: 34vh;
}
#per_3_1_number_3{
    top: 48vh;
}
#per_3_1_number_4{
    top: 62vh;
}


#per_3_1_switch{
    position: absolute;
    top: 50vh;
    right: 1vw;
    color: #FFFFFF;
    width: 1.3vw;
    height: 28vh;
    font-family: Inter;
    font-size: 3vh;
    font-weight: 600;
    line-height: 4vh;
    text-align: center;

}


#per_3_2{
    position: relative;
}


#per_3_2_container{
    width: 85vw;
    height: 54vh;
    margin-right: 1vw;
    display: flex;
    position: absolute;
    top:18%;
}

#per_3_2_file{
    width: 18vw;
    height: 54vh;
    margin: 0 4vw;
    background: url('/public/video recommendation/p2.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 2vw;
}

#per_3_2_file>div{
    width: inherit;
    height: 30%;
    background-image: linear-gradient(rgba(81, 154, 210,0),#483D2F);
    /*background: linear-gradient(0.13deg, #005FAE 0.07%, rgba(0, 95, 174, 0.64) 55.64%, rgba(0, 95, 174, 0) 91.64%);*/
    position: absolute;
    bottom: 0;
    border-radius: 2vw;
}

#per_3_2_file>div>span{
    width: 100%;
    height: 2vh;
    font-family: Inter;
    font-size: 3vh;
    font-weight: 700;
    line-height: 3vh;
    text-align: left;
    color:#FFFFFF;
    position: absolute;
    bottom: 5vh;
    left: 2vw;
;

}

#per_3_2_back{
    width: 100%;
    height: 52%;
    margin: 12% 0;
    background-color: rgba(213, 239, 128, 1) ;
    z-index: -2;
    position: absolute;
    top:10%
}

#per_3_2_back_number{
    color: #FFFFFF;
    font-family: Inter;
    font-size: 12vh;
    font-style: italic;
    font-weight: 900;
    line-height: 12vh;
    text-align: left;
    position: absolute;
    right: 2vw;
    top: 68vh;
}

</style>