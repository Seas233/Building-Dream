<script setup>
    import { onMounted,reactive,ref,watch } from 'vue';
    import { useRouter } from 'vue-router';
    import { useRoute } from 'vue-router';
    import axios from 'axios';

    import user_module from '../src/components/user_module.vue';
    import change_info from '../src/components/change_info.vue';
    import create_team from '../src/components/create_team.vue';
    
    const props = defineProps({
        current_user: {
            type: Number,
            default: ""
        }
    })

    const router = useRouter();
    const route = useRoute();

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

    let user,teamlist = [];
    let state = ref('none');

    user = {
        name:"张盈婷",
        id:-1,
        ip:"山东",
        personal_sign:"默认签名，献给每一位支教的小伙伴！",
        school:"山东大学",
        team:[-1,2]
    }

    teamlist = [
        {
            name:"春晖支教队",
            id:10001,
            archiveroom:[
                {
                    name:"“潍”子送芳",
                    id:1,
                    create_time:"2024年8月21日",
                    latest_time:"2024年8月25日",
                    archive:[
                        {title:"梦想麦田，支教启航",id:112},
                        {title:"支教进行时",id:113},
                        {title:"叮铃铃，上课啦！",id:113},
                        {title:"大合照",id:113},
                    ]
                },
                {
                    name:"贵州支教记",
                    id:2,
                    create_time:"2023年3月1日",
                    latest_time:"2023年8月25日",
                    archive:[
                        {title:"走进大山",id:112},
                        {title:"孩子们的笑颜",id:113},
                        {title:"记山中小学的一天",id:113},
                        {title:"记山中小学的一天2",id:113},
                        {title:"记山中小学的一天3",id:113},
                        {title:"再见，再见",id:113},
                    ]
                }
            ]
        },
        {
            name:"小树林支教队",
            id:10002,
            archiveroom:[
                {
                    name:"科彩启航",
                    id:1,
                    create_time:"2024年8月21日",
                    latest_time:"2024年8月25日",
                    archive:[
                        {title:"梦想麦田，支教启航",id:112},
                        {title:"支教进行时",id:113},
                        {title:"叮铃铃，上课啦！",id:113},
                        {title:"大合照",id:113},
                    ]
                },
            ]
        },
    ]
    
</script>

<template>
    <div id="bac"></div>

    <div id="lo">
        <div id="le">
            <user_module :user="user" :teamlist="teamlist"
            @change_info="() => {state = 'change_info'}"
            @create_team="() => {state = 'create_team'}"
            ></user_module>
        </div>

        <div id="mi">
            <div style="height: 30px;"></div>
            
            <div v-for="i in teamlist">
                <!--支教队-->
                <div class="team_head">{{ i["name"] }}支教档案</div>

                <!--档案室-->
                <div class="room_" v-for="j in i['archiveroom']">
                    <div class="room_head">档案室：{{ j["name"] }}</div>

                    <div class="room_time">创建：{{ j["create_time"] }}<p></p>更改：{{ j["latest_time"] }}</div>
                    
                    <!--档案-->
                    <div class="room_body">
                        <div class="arc_" v-for="k in j['archive']" @click="router.push({path: '/archive',query: {arc_id: k['id']}})">
                            <div class="arc_pic"></div>
                            <div class="arc_title">{{ k["title"] }}</div>
                        </div>
                        <div class="arc_add" v-if="props.current_user === route.query.user_id" @click="router.push({path: '/create_archive', query: { user_id: route.params.user_id,arc_id: i['id'] }})"></div>
                    </div>
                </div>
            </div>
        </div>

        <div></div>

        <change_info v-if="state == 'change_info'" :user="user"
        @cancel="state = none"></change_info>

        <create_team v-if="state == 'create_team'" :user="user"
        @cancel="state = none"></create_team>

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
    text-align: center;
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