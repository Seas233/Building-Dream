<script setup>
import { defineEmits,ref } from 'vue';

const emit = defineEmits(['setting_close']);

const close = () =>{
    emit('setting_close');
}
let Exhibition_Room = ref(true);

</script>

<template>
    <div id="a">
        <div class="a_back" @click="close"></div>

        <div id="a_1">
            <div class="a_back" @click="close"></div>

            <div id="a_2">
                <div>
                    <div id="a_3">
                        <div id="a_3_1"></div>
                        <div id="a_3_2" class="t_1">设 置</div>
                    </div>

                    <div class="a_head t_1">隐私</div>
                    <div>
                        <div class="t_2">陈列室是否开放
                        </div>

                        <div class="butt_1" @click="() => {Exhibition_Room = true}">
                            <div v-if="Exhibition_Room"></div>
                        </div>
                        是
                        <div class="butt_1" @click="() => {Exhibition_Room = false}">
                            <div v-if="!Exhibition_Room"></div>
                        </div>
                        否
                    </div>
                        
                    
                    <div class="t_2">个人形象是否开放</div>

                    <div class="a_head t_1">语言</div>
                    <div class="t_2">语言选项</div>

                    <div class="a_head t_1">声音</div>
                    <div class="t_2">背景音乐</div>
                    <div class="t_2">音量调节</div>
                </div>
            </div>
            
            <div class="a_back" @click="$emit('setting_close')"></div>
        </div>

        <div class="a_back" @click="$emit('setting_close')"></div>
    </div>
</template>

<style scoped>
*{
    color: #AED132;
}

.t_1{
    font-size: 30px;
    
    font-family: Inter;
    font-weight: 600;
}

.t_2{
    font-size: 25px;
    
    font-family: Inter;
    font-weight: 600;

    margin-top: 20px;
    margin-left: 130px;
    position: relative;
    width: 250px;

    display: flex;
}

#a{
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0px;
    left: 0px;
    z-index: 101;
    display: grid;
    grid-template-rows: 1fr 600px 1fr;
    overflow: auto;
}

.a_back{
    background-color: rgba(0,0,0,0.4);
}

#a_1{
    display: grid;
    grid-template-columns: 1fr 1000px 1fr;
}

#a_2{
    background-color: rgba(0,0,0,0.4);
}

#a_2>*{
    width: 100%;
    height: 100%;
    border: 10px solid #AED132;
    border-radius: 40px;
    background-color: white;
}

#a_3{
    display: flex;
    align-items: center;
    margin-top: 20px;
    margin-left: 20px;
}

#a_3_1{
    background-image: url("../../public/设置_2.png");
    height: 40px;
    width: 40px;
    background-size: contain;
    background-position: center center;
    background-repeat: no-repeat;
}

#a_3_2{
    margin-left: 20px;
}

.a_head{
    margin-left: 100px;
    margin-top: 20px;
}

.butt_1{
    width: 25px;
    height: 25px;
    border: #AED132;
    background-color: black;
}
</style>
