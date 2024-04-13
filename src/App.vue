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
    <div id="app_container">
        <router-view></router-view>
        <div id="app_buttom">
            <div>关注我们</div>
            <div>
                <div>
                    <li>快速入口</li>
                    <li>一些选项</li>
                    <li>一些选项</li>
                    <li>一些选项</li>
                    <li>一些选项</li>
                </div>
                <div>
                    <li>关于我们</li>
                    <li>一些选项</li>
                    <li>一些选项</li>
                    <li>一些选项</li>
                </div>
                <div>
                    <li>联系我们</li>
                    <li>一些选项</li>
                    <li>一些选项</li>
                    <li>一些选项</li>
                </div>
            </div>
        </div>
    </div>
    


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

#app_container{
    margin: 0 auto;
    height: auto;
    width: 1700px;
    background-color: white;
}

#app_buttom{
    background-color: #F7F8FB;
    margin-top: 10px;
    height: 400px;
    width: 100%;    
}

li{
    margin: 16px 0;
    list-style-type: none;
    font-family: Inter;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    text-align: left;
    color: #80838A;
}

#app_buttom>div{
    margin: 10px auto;
    width: 1440px;
    position: relative;
}

#app_buttom>div:first-child{
    height: 127px;
    padding-top: 70px;
    font: Inter;
    font-weight: 400;
    line-height: 20px;
    font-size: 20px;
    color: #070708;
}

#app_buttom>div:nth-child(2){
    height: 276px;
}

#app_buttom>div:nth-child(2) div{
    position: absolute;
    top: 0;
}

#app_buttom>div:nth-child(2) div:nth-child(1){
    left: 0;
}
#app_buttom>div:nth-child(2) div:nth-child(2){
    left: 150px;
}
#app_buttom>div:nth-child(2) div:nth-child(3){
    left: 300px;
}

#app_buttom>div:nth-child(2) div li:first-child{
    font-family: Inter;
    font-size: 20px;
    font-weight: 400;
    line-height: 28px;
    text-align: left;
    color: #070708;
}

</style>
