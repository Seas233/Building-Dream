<script setup>
    import {ref,computed} from "vue";
    import { useRouter } from 'vue-router';

    const router = useRouter()

    //router.push('/main');

    let current_user = -1;

    //检查登录
    router.beforeEach(async (to, from) => {
        if(current_user == 0 && to.name == 'user')
        {
            return { name: 'login'}
        }
    })
</script>

<template>

    <div id="app_head">
        <div id="app_head_left">筑梦云窗</div>
         <div id="app_head_right">
            <div @click="router.push('/main')">首页</div>
            <div @click="router.push('/archive_recommendation')">档案推荐</div>
            <div @click="router.push({path: '/user', query: { user_id: current_user }})">个人主页</div>
            <div>联系我们</div>
            <div @click="router.push('/login')">登录</div>
        </div>
    </div>

    <router-view :current_user=current_user></router-view>

   <div id="app_buttom"></div>
</template>

<style scoped>
#app_head{
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: rgba(255,255,255,0.6);
    padding: 0 140px;
    min-width: 1200px;

    position: absolute;
    z-index: 1001;
}

#app_head_left{
    /*font-family: Inter;*/
    color: #A6E67B;
    font-size: 1.5em;
    font-weight: 600;
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
    font-size: 1.2em;
    line-height: 22px;
    text-align: right;
    color: #A6E67B;
}

#app_buttom{
    margin: 0 auto;
    padding: 0 1.4rem;
    background-color: #F7F8FB;
    margin-top: 10px;
    height: 200px;
    width: 100%;
}
</style>
