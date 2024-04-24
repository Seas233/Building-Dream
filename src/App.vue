<script setup>
import {ref,computed} from "vue";
import { useRouter } from 'vue-router';

const router = useRouter()

router.push('/main');

const goto_login = () => {
    router.push('/login')
}

const goto_main = () => {
    router.push('/main')
}

const goto_vi_re = () => {
    router.push('/video')
}

const goto_person = () => {
    router.push('/person')
}

const goto_map = () => {
    router.push('/map')
}
</script>

<template>

    <div id="app_head">
        <div id="app_head_left">筑梦云窗</div>
         <div id="app_head_right">
            <div @click="goto_main">首页</div>
            <div @click="goto_vi_re">视频推荐</div>
            <div @click="goto_person">个人主页</div>
            <div >联系我们</div>
            <div  @click="goto_login">登录</div>
        </div>
    </div>

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

    


</template>

<style scoped>
#app_head{
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: rgb(105,179,31);
    padding: 0 140px;
    min-width: 1200px;
}

#app_head_left{
    /*font-family: Inter;*/
    color: #FFF;
    font-size: 24px;
    font-weight: 500;
    line-height: 22px;
    letter-spacing: 0.2em;
    /* position:absolute; */
    /* left: 97px; */
    width: 124px;
}


#app_head_right{
    width: auto;
    display: flex;
    align-items: center;
    /*flex-direction: row-reverse;*/
}

#app_head_right *{
    /*font-family: Inter;*/
    width: 104px;
    font-size: 16px;
    font-weight: 400;
    line-height: 22px;
    text-align: right;
    color: #FFF;
}

#app_buttom{
    margin: 0 auto;
    padding: 0 1.4rem;
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
    /*width: 1440px;
    /* */width: 100%;
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
