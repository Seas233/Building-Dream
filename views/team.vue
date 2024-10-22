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

    if(true)
    {
        team_info = {
            name: "春晖支教队",
            id: -1,
            school:"山东大学",
            describe:"来自山东大学的支教团队",
            member:[-1,-2,-3,-4,-5]
        };
        archiveroom = [
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
    }
    else{
        //获取队伍信息 
    }

    const test_member_info = [
        {id: 1005,name:"张盈婷",profile_picture_url:"none"},
        {id: 1002,name:"徐畅",profile_picture_url:"none"},
        {id: 1003,name:"孙钺涛",profile_picture_url:"none"},
        {id: 1004,name:"傅思远",profile_picture_url:"none"},
        {id: 1001,name:"张锦涛",profile_picture_url:"none"},
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
