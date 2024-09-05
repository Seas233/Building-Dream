<script setup>
    import { onMounted,reactive,ref,watch,defineProps } from 'vue';
    import setting from "../src/components/useless/setting.vue";
    import { useRouter } from 'vue-router';
    import { useRoute } from 'vue-router';
    import axios from 'axios';
    import team_module from '../src/components/team_module.vue';

    const props = defineProps({
        current_user: {
            type: Number,
            default: ""
        }
    })
    
    onMounted(() => {
        const profilePictures = document.querySelectorAll('.mem_profile_picture');
        profilePictures.forEach(pic => {
            pic.style.height = pic.offsetWidth + 'px';
        });
    });

    const windowWidth = ref(window.innerWidth);
    const windowHeight = ref(window.innerHeight);

    watch(
        () => [windowWidth.value, windowHeight.value],
        () => {
            const profilePictures = document.querySelectorAll('.mem_profile_picture');
            profilePictures.forEach(pic => {
            pic.style.height = pic.offsetWidth + 'px';
            });
        }
    );

    window.addEventListener('resize', () => {
        windowWidth.value = window.innerWidth;
        windowHeight.value = window.innerHeight;
    });

    const router = useRouter();
    const route = useRoute();

    let team_info,member_list = [],archiveroom = [];

    if(route.query.team_id < 10)
    {
        team_info = {
            name: "春晖支教队",
            id: -1,
            school:"千年科技学院",
            describe:"为什么游戏开发部会去支教？？",
            member:[-1,-2,-3,-4,-5]
        };
        archiveroom = [
            {
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
    }
    else{
        //获取队伍信息 
    }

    const test_member_info = [
        {id: -5,name:"邮箱大魔王",profile_picture_url:"none"},
        {id: -2,name:"王小桃",profile_picture_url:"none"},
        {id: -3,name:"王小绿",profile_picture_url:"none"},
        {id: -4,name:"yuzi",profile_picture_url:"none"},
        {id: -1,name:"爱丽丝",profile_picture_url:"none"},
    ]

    for(let i = 0;i < team_info["member"].length;i++)
    {
        if(team_info["member"][i] < 0)
        {
            let add = test_member_info[i];
            member_list.push(add)
        }
        else{
            //此处获取用户信息
            axios.get(apiUrl + "/user/login-signup/user",{
                })
                .then(function (response) {
                    let user = response;
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    }
</script>

<template>
    <div id="bac"></div>

    <div id="lo">
        <div id="le">
            <team_module :team_info="team_info" :member_list="member_list"></team_module>
        </div>

        <div id="mi">
            <div style="height: 30px;"></div>
            
            <div class="team_head">{{ team_info["name"] }}支教档案</div>

            <!--档案室-->
            <div class="room_" v-for="j in archiveroom">
                <div class="room_head">档案室：{{ j["name"] }}</div>

                <div class="room_time">创建：{{ j["create_time"] }}<p></p>更改：{{ j["latest_time"] }}</div>
                
                <!--档案-->
                <div class="room_body">
                    <div class="arc_" v-for="k in j['archive']" @click="router.push({path: '/archive',query: {arc_id: k['id']}})">
                        <div class="arc_pic"></div>
                        <div class="arc_title">{{ k["title"] }}</div>
                    </div>
                    <div class="arc_add" v-if="member_list.some(i => i.id === props.current_user)" @click="router.push({path: '/create_archive', query: { user_id: route.params.user_id,room_id: j['id'] }})"></div>
                </div>
            </div>

        </div>

        <div></div>

        <div id="ri"></div>
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
    grid-template-columns: minmax(350px,10fr) minmax(735px,21fr) 30px minmax(350px,10fr);

    padding-top: 120px;
}

#lo>*{
    width: 100%;
    height: 100%;
}

#le{
    padding-left: 30px;
    padding-right: 30px;
    height: min-content(100vh);
}

#mi{
    position: relative;
    background-color: rgba(255,255,255,0.43);
}

#mi::before{
    height: 120px;
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

.arc_add{
    width: 200px;
    height: 200px;
    background-color: #b3f0a2;
    background-image: url("/图层 0.png");
    background-size: 100px;
    background-repeat: no-repeat;
    background-position: center center;
    border-radius: 20px;
}
</style>
