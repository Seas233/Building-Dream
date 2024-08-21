<script setup>
    import { onMounted,reactive,ref,watch,defineProps } from 'vue';
    import setting from "../src/components/setting.vue";
    import { useRouter } from 'vue-router';
    import { useRoute } from 'vue-router';
    import axios from 'axios';

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
    let if_setting_open = ref(false);

    console.log(route.query.user_id)

    if(route.query.user_id <= 0)
    {
        user = reactive({
            name:"爱丽丝",
            ip:"千年",
            personal_sign:"爱丽丝错了爱丽丝不该在网上口嗨的",
            school:"千年科技学院",
            team:[-1,-4,-3,-2]
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

    for(let i = 0;i < user["team"].length;i++)
    {
        if(user["team"][i] < 0)
        {
            let add = {name:"千年游戏开发部第"+ i + "支教队",
                id:i,
                archiveroom:[
                    {
                        name:"玩档玩的",
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
            teamlist.push(add)
        }
    }

    let sum = reactive([
        {
            type:"title",
            content:"一棵树摇动另一棵树，一朵云推动另一朵云",
        },
        {
            type:"text",
            content:"他们渴望走出大山，我们选择远赴千里;他们喜欢仰望星空，我们善于点亮希望;他们畅想诗和远方，我们播下种子，让未来不在苟且。"
        },
        {
            type:"text",
            content:"我为什么想去支教呢?这个问题我在报名之前思索过很久，也许是在我短短四年大学生涯里，结识过几位对我人生影响十分重大的恩师.."
        }
    ]);
    
    const mi_content = ref(null);

    //初始加载
    onMounted(() => {
        for(let i = 0;i < sum.length;i++)
        {
            if(sum[i]["type"] == "title")
            {
                const i_ele = document.createElement("div");
                i_ele.textContent = sum[0]["content"];
                i_ele.className = "ar__mi_headline";
                mi_content.value.appendChild(i_ele);
            }
            if(sum[i]["type"] == "text")
            {
                let i_ele = document.createElement("div");
                i_ele.className = "ar__mi_cont_text";
                i_ele.textContent = sum[sum.length - 1]["content"];
                if(sum[i - 1]["type"] != "text")
                {
                    i_ele.style.marginTop = "30px";
                }
                mi_content.value.appendChild(i_ele);
            }
            else if(sum[i]["type"] == "pic")
            {
                let i_ele = document.createElement("img");
                //i_ele.src = sum[i]["file"];URL.createObjectURL(file)
                i_ele.src = URL.createObjectURL(sum[i]["file"]);
                i_ele.width = "100%";
                i_ele.className = "ar__mi_cont_pic";
                mi_content.value.appendChild(i_ele);
            }
            else if(sum[i]["type"] == "video")
            {
                let i_ele = document.createElement("video");
                i_ele.controls = true;
                //i_ele.src = sum[i]["file"];URL.createObjectURL(file)
                i_ele.src = URL.createObjectURL(sum[i]["file"]);
                i_ele.className = "ar__mi_cont_vid";
                mi_content.value.appendChild(i_ele);
            }
            else if(sum[i]["type"] == "audio")
            {
                let i_ele = document.createElement("audio");
                i_ele.controls = true;
                //i_ele.src = sum[i]["file"];URL.createObjectURL(file)
                i_ele.src = URL.createObjectURL(sum[i]["file"]);
                i_ele.className = "ar__mi_cont_aud";
                mi_content.value.appendChild(i_ele);
            }
        }
    })
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
                </div>
            </div>

            <div id="le_sec">个性签名：{{ user["personal_sign"] }}</div>

            <div style="display: flex;">
                <div id="school">{{ user["school"] }}</div><div></div>
            </div>

            <div id="le_fo"></div>
            <div id="le_fi"></div>

            <!--<div id="le_si">
                <div id="le_si_2">修改资料</div>
                <div id="le_si_1" @click="if_setting_open = true;"></div>
            </div>-->
        </div>

        <div id="mi">
            <div id="mi_content" ref="mi_content">
                <!--<div id="mi_headline">{{ sum[0]["content"] }}</div>-->
            </div>
        </div>

        <div></div>

        <div id="ri">
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

    padding-top: 120px;
}

#lo>*{
    width: 100%;
    height: 100%;
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
    background-image: url("/测试头像.jpg");
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
    background-image: url("/更改测试头像.jpg");
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

#le_fo,#le_fi{
    background-color: #b3f0a2;
    height: 150px;
    margin-top: 30px;
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
    background-color: rgba(255,255,255,0.43);
    padding: 100px;
    overflow: auto;
}

.mi_1{
    display: flex;
    flex-direction: row-reverse;
}

#append_buttom{
    background-color: #b3f0a2;
    background-image: url("/图层 0.png");
    background-size: 60px;
    background-position: center center;
    background-repeat: no-repeat;
    margin-top: 30px;
    height: 100px;
    width: 100px;
    border-radius: 50%;
}

#send_buttom{
    background-color: #6B944F;
    background-image: url("/图层 0.png");
    background-size: 60px;
    background-position: center center;
    background-repeat: no-repeat;
    margin-top: 30px;
    margin-left: 30px;
    height: 100px;
    width: 100px;
    border-radius: 50%;
}

#ri{
    background-color: rgba(255,255,255,0.43);
}

#top1{
    width: 100%;
    height: 25em;
    background-color: #b3f0a2;
    resize: none;
    color: white;
    font-size: 1.5em;
    padding: 1em;
}

#top_title{
    width: 100%;
    height: 5em;
    background-color: #b3f0a2;
    resize: none;
    color: white;
    font-size: 1.5em;
    padding: 1em;
}

#ri_bu{
    display: grid;
    grid-template-columns: 3fr 1fr;
    grid-column-gap: 30px;
    height: 3em;
    margin-top: 30px;
    padding-left: 30px;
    padding-right: 30px;
}

#pic_review{
    width: 100%;
    height: 400px;
}

#type_choice{
    display: grid;
    color: white;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    border-radius: 0.75em;
    overflow: hidden;
}

#type_title{
    background-color: #A6E67B;
    border-radius: 0.75em;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 1.2em;
}

#type_choice>*{
    display: flex;
    justify-content: center;
    align-items: center;
}

#aud,#vid{
    padding: 30px;
}

#add{
    width: 100%;
    height: 100%;
    border-radius: 0.75em;

    color: white;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: #A6E67B;
}
</style>

<style>
.ar__mi_headline{
    color: #6B944F;
    font-size: 2em;
    display: flex;
    justify-content: center;
    margin-bottom: 50px;
}

.ar__mi_cont_text{
    color: #6B944F;
    font-size: 1.2em;
    text-indent: 2em;
    line-height: 1.5em;
    letter-spacing: 1px;
}

.ar__mi_cont_pic{
    width: 100%;
    height: 400px;
    margin-top: 30px;
    object-fit: contain;
}

.ar__mi_cont_vid{
    width: 100%;
    height: 400px;
    margin-top: 30px;
    object-fit: contain;
}

.ar__mi_cont_aud{
    width: 100%;
    margin-top: 30px;
    object-fit:contain;
}
</style>