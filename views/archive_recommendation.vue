<script setup>
    import { useRouter } from 'vue-router';
    import axios from 'axios';

    const router = useRouter();

    //获取list，一串档案室的id
    //axios()

    //根据档案室id查找
    let archiverooms = [
        {
            team_name:'千年游戏开发部第一支教队',
            name:"玩档玩的",
            id:1,
            create_time:"2024年8月21日",
            latest_time:"2024年8月25日",
            archive:[
                {title:"日服结算室外GOZ大决战",id:112},
                {title:"总力室内黑白TM一图流参考",id:113},
                {title:"10.10-10.16 防御演习 室内重甲",id:113},
                {title:"10.10-10.16 防御演习 室内重甲",id:113},
            ]
        },
        {
            team_name:'千年游戏开发部第一支教队',
            name:"玩粥玩的",
            id:2,
            create_time:"2024年8月21日",
            latest_time:"2024年8月25日",
            archive:[
                {title:"AS-S1~4低配平民全关卡攻略！",id:112},
                {title:"AS-S1~5摆完半挂机全关卡攻略！",id:113},
                {title:"小丘郡剿灭摆完挂机全关卡攻略！",id:113},
            ]
        }
    ]
</script>

<template>
    <div id="bac"></div>
    
    <div style="height: 150px;"></div>

    <div id="lo">
        <div></div>
        <div></div>

        <div id="mi">
            <div id="mi_head">档案推荐</div>
            
            <div class="room_" v-for="j in archiverooms">
                <div class="team_head">{{ j["team_name"] }}</div>

                <div class="room_head">档案室：{{ j["name"] }}</div>

                <div class="room_time">创建：{{ j["create_time"] }}<p></p>更改：{{ j["latest_time"] }}</div>
                
                <!--档案-->
                <div class="room_body">
                    <div class="arc_" v-for="k in j['archive']" @click="router.push({path: '/archive',query: {arc_id: k['id']}})">
                        <div class="arc_pic"></div>
                        <div class="arc_title">{{ k["title"] }}</div>
                    </div>
                </div>
            </div>
        </div>

        <div></div>
        <div></div>
    </div>
</template>

<style scoped>
#bac{
    position: fixed;
    background-image: url("/login_bac.png");
    width: 100vw;
    height: 100vw;
    background-repeat:no-repeat;
    background-size:cover;
    z-index: -10;
}

#lo{
    width: 100%;
    position: relative;
    display: grid;
    grid-template-columns: minmax(350px,10fr) 30px minmax(735px,21fr) 30px minmax(350px,10fr);
}

#mi{
    background-color: rgba(255,255,255,0.43);
    padding-top: 30px;
    overflow: auto;
}

#mi>*{
    width: 100%;

    padding-left: 100px;
    padding-right: 100px;
}

.team_head{
    color: #6B944F;
    font-size: 2em;
    font-weight: 900;

    width: 100%;

    display: flex;
    justify-content: center;

    margin-bottom: 30px;
}

#mi_head{
    color: #6B944F;
    font-size: 2em;
    font-weight: 900;

    width: 100%;

    display: flex;
    justify-content: center;

    margin-bottom: 30px;
}

.room{
    margin-bottom: 30px;
}

.room_head{
    font-size: 1.5em;
    color: #6B944F;
    margin-bottom: 15px;
}

.room_time{
    margin-bottom: 15px;
}

.room_body{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-gap: 25px;
    padding-bottom: 15px;
}

.arc_{
    width: 200px;
    height: 200px;
    background-color: #b3f0a2;
    padding: 20px;
    border-radius: 20px;
}

.arc_pic{
    background-image: url("/档案.png");
    background-repeat: no-repeat;
    background-position: center center;
    background-size: auto 100px;
    height: 100px;
    width: 100%;
    margin-bottom: 10px;
}

.arc_title{
    font-size: 1.1em;
}
</style>
