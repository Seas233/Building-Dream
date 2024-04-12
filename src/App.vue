<script setup>
import {ref,computed} from "vue";
import { useRouter } from 'vue-router';

const router = useRouter()

router.push('/main')

const goto_login = () => {
    router.push('/login')
}
</script>

<template>
    <div id="app_head">
        <div id="app_head_left">筑梦云窗</div>
         <div id="app_head_right">
            <div >首页</div>
            <div >视频推荐</div>
            <div >个人主页</div>
            <div >联系我们</div>
            <div  @click="goto_login">登录</div>
        </div>
    </div>

    <router-view></router-view>

    <div id="app_buttom"></div>
</template>

<style scoped>
#app_head{
    width: 100vw;
    height: 70px;
    display: flex;
    align-items: center;
    background-color: rgb(105,179,31)
}

#app_head_left{
    font-size: 20px;
    /*font-family: Inter;*/
    color: #FFF;
    font-size: 24px;
    font-weight: 500;
    line-height: 22px;
    letter-spacing: 0.2em;
    position:absolute;
    left: 97px;
}


#app_head_right{
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    /*flex-direction: row-reverse;*/
}

#app_head_right *{
    /*font-family: Inter;*/
    font-size: 16px;
    font-weight: 400;
    line-height: 22px;
    text-align: left;
    color: #FFF;
    margin-right: 72px;
}

#app_buttom{
    background-color: aqua;
    width: 100vw;
}
</style>
