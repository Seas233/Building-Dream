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
        school:"千年科技学院",
        describe:"为什么游戏开发部会去支教？？",
        member:[-1,-2,-3,-4,-5]
    };

    const member_list = [
        {id: -5,name:"邮箱大魔王",profile_picture_url:"none"},
        {id: -2,name:"王小桃",profile_picture_url:"none"},
        {id: -3,name:"王小绿",profile_picture_url:"none"},
        {id: -4,name:"yuzi",profile_picture_url:"none"},
        {id: -1,name:"爱丽丝",profile_picture_url:"none"},
    ]

    let sum = [
        {
            type:"title",
            content:"一棵树摇动另一棵树，一朵云推动另一朵云",
        },
        {
            type:"text",
            content:"他们渴望走出大山，我们选择远赴千里;他们喜欢仰望星空，我们善于点亮希望;他们畅想诗和远方，我们播下种子，让未来不在苟且。"
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