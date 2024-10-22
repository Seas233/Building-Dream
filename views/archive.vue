<script setup>
    import { onMounted,reactive,ref,watch,defineProps } from 'vue';
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

    let apiUrl = 'http://127.0.0.1:8000';

    const router = useRouter();
    const route = useRoute();

    //此处通过archive_id查找到对应支教队id以及相关信息
    let team_info = {
        name: "春晖支教队",
        id: -1,
        school:"山东大学",
        describe:"为什么游戏开发部会去支教？？",
        member:[-1,-2,-3,-4,-5]
    };

    const member_list = [
        {id: 1005,name:"张盈婷",profile_picture_url:"none"},
        {id: 1002,name:"徐畅",profile_picture_url:"none"},
        {id: 1003,name:"孙钺涛",profile_picture_url:"none"},
        {id: 1004,name:"傅思远",profile_picture_url:"none"},
        {id: 1001,name:"张锦涛",profile_picture_url:"none"},
    ]

    let sum = [
        {
            type:"title",
            content:"梦想麦田，支教启航",
        },
        {
            type:"text",
            content:"昨天，我们开启了我们的第一次潍坊支教活动。这几天像做梦一样，犹记得我们前天上午坐上了去高密的高铁，那天天气很好，到达高密北站的时候，我抬头望天，漂亮的落日云霞，让我出神了许久，这样的美景让我不由得对未知的高密支教之旅满怀期待起来。"
        },
        {
            type:"text",
            content:'我们出高铁站时，天色逐渐暗淡了下来，我们本打算乘乡镇公交抵达村子里，但附近的村民告诉我抵达村子里的公交早在五点钟就没了，我们便打算乘坐出租车前往。出租车行驶在一望无际的田野，车子穿梭在绿油油的麦田里，远离了城市的喧嚣，我很享受那一刻窗外呼啸而过的风声。不知过了多久，我们便来到了高密密水街道的西周阳村。下了车，我环顾四周，来到了熟悉的乡下，像是回归故土般，我好奇地观察着周围的人和物。几位好心的大娘打量了几眼我们，就说你们是新来村子里支教的大学生吧，我们礼貌地点头。其中一个大娘说天色已经晚了，路不好走，骑着电动车打开车灯给我们带路，就这样，我们提着行李箱，走在崎岖不平的泥路上，鞋上已经满是污泥，那也是第一次对未来两周的支教生活有了些许担忧。走在半路上，我们遇到了迎面而来的赵老师，她是英华学堂爱心小院的院长也是这里唯一的老师，他很热情地向我们招手，也给我们带来了一份礼物。'
        },
        {
            type:"pic",
            url:'/测试/P1.jpg',
        },
        {
            type:"text",
            content:'赵老师把我们安顿好之后，对我们说，虽然房子是比较旧的，但房子里面的物件是新的，也为我们安置了空调和外出采购生活物品的两辆新的电动车，我们很感谢赵老师的帮助。'
        },
        {
            type:"text",
            content:'第二天就迎来了我们支教的开营仪式。开营仪式上孩子们对我们这些生面孔还是显得有些局促不安，我们就跟孩子们玩起了击鼓传花的小游戏，让孩子们能够尽快地熟悉我们。游戏开始！大家显得都很兴奋，击鼓传花传到的同学，便会腼腆起来，可能是因为要介绍一下自己。不过在这个过程中，有一个同学很是活泼，刚开始介绍自己的时候虽然有点紧张结巴，但当他谈及自己的爱好时，很激动地说着自己最喜欢的动漫是火影忍者，最喜欢的角色是带土，大声地向全班说以后想成为拥有火之意志的人！当大家哄堂大笑的时候，我看到了他眼神里的坚定，很纯粹。'
        },
        {
            type:"text",
            content:'我们的支教之旅才刚刚开始，相信之后，我们将继续书写更精彩的故事！'
        },
    ];
    
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
                i_ele.textContent = sum[i]["content"];
                if(sum[i - 1]["type"] != "text")
                {
                    i_ele.style.marginTop = "30px";
                }
                mi_content.value.appendChild(i_ele);
            }
            else if(sum[i]["type"] == "pic")
            {
                let i_ele = document.createElement("img");

                //i_ele.src = URL.createObjectURL(sum[i]["file"]);
                i_ele.src = sum[i]["url"];
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
    <div id="bac"></div>

    <div id="lo">
        <div id="le">
            <team_module :team_info="team_info" :member_list="member_list"></team_module>
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