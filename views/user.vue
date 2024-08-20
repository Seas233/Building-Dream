<script setup>
    import { onMounted,reactive,ref,watch,defineProps } from 'vue';
    import setting from "../src/components/setting.vue";
    import { useRouter } from 'vue-router';
    import { useRoute } from 'vue-router';
    import axios from 'axios';
import Archive from './archive.vue';
    
    const props = defineProps({
        current_user: {
            type: Number,
            default: ""
        }
    })

    const router = useRouter();
    const route = useRoute();

    //确认当前个人页面的id和登陆者的id一样,开放修改档案操作
    if(props.current_user == route.params.id)
    {
        console.log("yes!")
    }

    onMounted(() => {
        let pic = document.getElementById("profile_picture")
        pic.style.height = pic.offsetWidth + "px";
    })

    const windowWidth = ref(window.innerWidth);
    const windowHeight = ref(window.innerHeight);

    watch(
    () => [windowWidth.value, windowHeight.value],
    () => {
        let pic = document.getElementById("profile_picture")
        pic.style.height = pic.offsetWidth + "px";
    }
    );

    window.addEventListener('resize', () => {
    windowWidth.value = window.innerWidth
    windowHeight.value = window.innerHeight
    });

    let user=reactive(),teamlist = [];
    let if_setting_open = ref(false);

    if(route.params.id <= 0)
    {
        user = reactive({
            name:"爱丽丝",
            ip:"千年",
            personal_sign:"爱丽丝错了爱丽丝不该在网上口嗨的",
            school:"千年科技学院",
            team:[-1,-2,-3]
        })
    }
    else
    {
        //此处获取用户信息
        /*axios.post(apiUrl + "",{
            })
            .then(function (response) {
                user = response;
            })
            .catch(function (error) {
                console.log(error);
            });*/
    }

    console.log(user["team"].length)

    for(let i = 0;i < user["team"].length;i++)
    {
        if(user["team"][i] < 0)
        {
            teamlist.push({name:"山大厨艺学院第"+ i + "支教队",
                archiveroom:[
                    {
                        name:"玩档玩的",
                        archive:[
                            {title:"日服结算室外GOZ大决战",id:112},
                            {title:"总力室内黑白TM一图流参考",id:113}
                        ]
                    },
                    {
                        name:"玩粥玩的",
                        archive:[
                            {title:"AS-S1~4低配平民全关卡攻略！",id:112},
                            {title:"AS-S1~5摆完半挂机全关卡攻略！",id:113}
                        ]
                    }
                ]
            })
        }
    }

    console.log(teamlist)
</script>

<template>
    <setting v-if="if_setting_open" @setting_close="() => {if_setting_open = false}"/>

    <div id="bac"></div>

    <div id="lo">
        <div id="le">
            <div id="le_top">
                <div id="profile_picture">
                    <div id="change_pic"></div>
                </div>

                <div style="margin-left: 5%;display: grid;">
                    <div id="name">{{ user["name"] }}</div>
                    <!--<div id="ip">ip属地:{{ user["ip"] }}</div>-->
                </div>
            </div>

            <div id="le_sec">个性签名：{{ user["personal_sign"] }}</div>

            <div style="display: flex;">
                <div id="school">{{ user["school"] }}</div><div></div>
            </div>

            <!--队伍信息-->
            <div id="le_team">
                <div class="le_team_i" v-for="i in teamlist">{{ i["name"] }}</div>
            </div>

            <div id="le_si">
                <div id="le_si_2">修改资料</div>
                <div id="le_si_1" @click="if_setting_open = true;"></div>
            </div>
        </div>

        <div id="mi">
            <div v-for="i in teamlist">
                <div id="mi_head">{{ i["name"] }}支教档案</div>

                <div id="mi_body">
                    <div v-for="j in i['archiveroom']">{{ j["name"] }}
                        <div v-for="k in j['archive']">
                            <div @click="() => router.push('/archive/' + k['id'])">{{ k["title"] }}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="mi_pic" @click="router.push('/create_archive')"></div>
        </div>

        <div></div>

        <div id="ri">
            <div id="ri_pic_bac"></div>
            <div id="ri_pic">
            </div>
        </div>

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
    grid-template-columns: 10fr 21fr 30px 10fr 30px;
}

#lo>*{
    width: 100%;
    height: 100%;
    padding-top: 120px;
}

#le{
    padding-left: 30px;
    padding-right: 30px;
}

#le_top{
    display: grid;
    grid-template-columns: 1fr 2fr;
}

#profile_picture{
    background-image: url("/头像.png");
    background-size: cover;
    border-radius: 50%; 
    border: 3px solid white;
    position: relative;
}

#change_pic{
    width: 30%;
    height: 30%;
    position: absolute;
    right: 0px;
    bottom: 0px;
    background-image: url("/更改头像.png");
    background-size: cover;
}

#name{
    color: #A6E67B;
    font-size: 2em;
    font-weight:900;
}

#team,#ip,#le_sec{
    color: #A6E67B;
    margin-top: 0.4em;
    font-size: 1.5em;
}

#name,#team,#ip{
    align-content: center;
}

#le_sec{
    padding-top: 30px;
    padding-bottom: 30px;
}

#school{
    background-color: #A6E67B;
    color: white;
    font-size: 1.5em;
    margin-bottom: 30px;

    height: 2em;
    padding-left: 1em;
    padding-right: 1em;
    border-radius: 1em;

    display: flex;
    align-items: center;
    justify-content: center;
}

.le_team_i{
    background-color: #b3f0a2;
    color: white;
    font-size: 1.5em;
    margin-bottom: 30px;
    margin-top: 30px;

    height: 4em;
    border-radius: 1em;
    
    display: flex;
    align-items: center;
    justify-content: center;
}

#le_si{
    display: flex;
    flex-direction: row-reverse;
    margin-top: 30px;
    margin-bottom: 30px;
}

#le_si_1{
    background-image: url("/设置_白.png");
    background-repeat: no-repeat;
    background-size: 24px 24px;
    background-position: center center;

    background-color: #A6E67B;
    border-radius: 15px;
    width: 60px;
    height: 30px;
}

#le_si_2{
    background-color: #A6E67B;
    border-radius: 15px;
    height: 30px;
    padding-left: 2em;
    padding-right: 2em;

    display: flex;
    justify-content: center;
    align-items: center;

    margin-left: 30px;

    font-size: 1.2em;
    color: white;
}

#mi{
    position: relative;
    display: grid;
    grid-template-rows: auto 300px;
}

#mi>*{
    width: 100%;
    height: 100%;
    background-color: rgba(255,255,255,0.43);

    padding-top: 20px;
    padding-left: 100px;
    padding-right: 100px;
}

#mi_head{
    color: #A6E67B;
    font-size: 2em;
    font-weight: 900;

    width: 100%;

    display: flex;
    justify-content: center;

    margin-bottom: 100px;
}



#mi_pic{
    position: absolute;
    bottom: 0px;
    left: 0px;
    z-index: 10;

    background-image: url("/女1Q.png");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: bottom right;

    width: 100%;
    height: 300px;

    transform: scaleX(-1);
}

#ri{
    position: relative;

    display: flex;
    flex-direction: column-reverse;
    align-items: center;
}

#ri_pic_bac{
    background-image: url("/人物背景.png");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center bottom;
    
    width: 80%;
    height: 100%;
    bottom: 60px;

    position: absolute;
    z-index: 1;
}

#ri_pic{
    background-image: url("/女1成.png");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center bottom;
    
    width: 40%;
    height: 100%;

    position: absolute;
    z-index: 3;
}
</style>