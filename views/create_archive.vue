<script setup>
    import { ref,reactive } from 'vue';
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

    let user,teamlist = [];
    let if_setting_open = ref(false);
    let type = ref("title");
    let ri_fun_on = ref(true);
    let test = ref(true);

    //------------------------
    //此处由room_id查找到对应的队伍id
    //route.query.room_id => team_id;
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
    //---------------------------------

    let sum = [];
    
    const mi_content = ref(null);

    function add_element()
    {
        if(type.value == "title")
        {
            let inputElement = document.getElementById("top_title");
            let add = {
                type:"title",
                content:inputElement.value,
            };
            if(add["content"] != "")
            {
                sum.push(add);
            }
            else{
                console.log("这是空的诶。。。");
                return;
            }
        }
        else if(type.value == "text")
        {
            let inputElement = document.getElementById("top1");
            let add = {
                type:"text",
                content:inputElement.value,
            };
            if(add["content"] != "")
            {
                sum.push(add);
            }
            else{
                console.log("这是空的诶。。。");
                return;
            }
        }
        else if(type.value == "pic")
        {
            let fileInput = document.getElementById('pic');
            const file = fileInput.files[0];
            if(file)
            {
                let add = {
                    type:"pic",
                    file:file,
                };
                sum.push(add);
            }
        }
        else if(type.value == "video")
        {
            let fileInput = document.getElementById('vid');
            const file = fileInput.files[0];
            if(file)
            {
                let add = {
                    type:"video",
                    file:file,
                };
                sum.push(add);
            }
        }
        else if(type.value == "audio")
        {
            let fileInput = document.getElementById('aud');
            const file = fileInput.files[0];
            if(file)
            {
                let add = {
                    type:"audio",
                    file:file,
                };
                sum.push(add);
            }
        }

        ri_fun_on.value = false;

        let i = sum.length - 1;
        if(type.value == "title")
        {
            const i_ele = document.createElement("div");
            i_ele.textContent = sum[0]["content"];
            i_ele.className = "ce_ar__mi_headline";
            mi_content.value.appendChild(i_ele);
            type.value = "text";
        }
        if(sum[i]["type"] == "text")
        {
            let i_ele = document.createElement("div");
            i_ele.className = "ce_ar__mi_cont_text";
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
            
            i_ele.src = URL.createObjectURL(sum[i]["file"]);
            
            i_ele.width = "100%";
            i_ele.className = "ce_ar__mi_cont_pic";
            mi_content.value.appendChild(i_ele);
            //i_ele.src = sum[i]["file"];URL.createObjectURL(file)
        }
        else if(sum[i]["type"] == "video")
        {
            let i_ele = document.createElement("video");
            i_ele.controls = true;
            //i_ele.src = sum[i]["file"];URL.createObjectURL(file)
            i_ele.src = URL.createObjectURL(sum[i]["file"]);
            i_ele.className = "ce_ar__mi_cont_vid";
            mi_content.value.appendChild(i_ele);
        }
        else if(sum[i]["type"] == "audio")
        {
            let i_ele = document.createElement("audio");
            i_ele.controls = true;
            //i_ele.src = sum[i]["file"];URL.createObjectURL(file)
            i_ele.src = URL.createObjectURL(sum[i]["file"]);
            i_ele.className = "ce_ar__mi_cont_aud";
            mi_content.value.appendChild(i_ele);
        }
    }

    async function load_pic(){
        let fileInput = document.getElementById('pic');
        let preview = document.getElementById('pic_preview');

        const file = fileInput.files[0];
        /*if(file){
            const reader = new FileReader();
            reader.onload = function(e){
                preview.src = e.target.result;
                preview.style.display = 'block';
            };
            reader.readAsDataURL(file);
        }*/
        preview.src = URL.createObjectURL(file);
    }

    async function send_paper()
    {
        test.value = false;
        /*
        axios.post(apiUrl + "/paper/abcd/papers/",{
            "content": sum,
            "id": 0,
            "ArchiveId": 0
            })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            }); */
        
    }
</script>

<template>

    <div id="bac"></div>

    <div id="lo">
        <div id="le">
            <team_module :team_info="team_info" :member_list="member_list" :stay="true"></team_module>
        </div>

        <div id="mi">
            <div id="mi_content" ref="mi_content">
                <!--<div id="mi_headline">{{ sum[0]["content"] }}</div>-->
            </div>

            <div class="mi_1">
                <div id="send_buttom" @click="send_paper" v-if="test"></div>
                <div id="append_buttom" @click="ri_fun_on = true" v-if="test"></div>
            </div>
        </div>

        <div></div>

        <div id="ri" v-show="test">
            <div id="ri_fun" v-if="ri_fun_on">
                <div id="ri_bu">
                    <div id="type_choice" v-if="type != 'title'">
                        <div id="type_text" :style="{ 'background-color' : type == 'text' ? '#A6E67B' : '#b3f0a2'}" @click="type = 'text'">文字</div>
                        <div id="type_pic" :style="{ 'background-color' : type == 'pic' ? '#A6E67B' : '#b3f0a2'}" @click="type = 'pic'">图片</div>
                        <div id="type_aideo" :style="{ 'background-color' : type == 'audio' ? '#A6E67B' : '#b3f0a2'}" @click="type = 'audio'">音频</div>
                        <div id="type_video" :style="{ 'background-color' : type == 'video' ? '#A6E67B' : '#b3f0a2'}" @click="type = 'video'">视频</div>
                    </div>
                    <div id="type_title" v-if="type == 'title'">标   题</div>

                    <div id="add" @click="add_element">添加</div>
                </div>
                <div v-if="type == 'title'" style="padding: 30px;">
                    <textarea id="top_title"></textarea>
                </div>

                <div v-if="type == 'text'" style="padding: 30px;">
                    <textarea id="top1"></textarea>
                </div>

                <div v-if="type == 'pic'" style="padding: 30px;">
                    <input type="file" accept="image/*" @change="load_pic" id="pic">
                    <img id="pic_preview" alt="" width="100%">
                </div>

                <div v-if="type == 'video'">
                    <input type="file" accept="video/*" id="vid">
                </div>

                <div v-if="type == 'audio'">
                    <input type="file" accept="audio/*" id="aud">
                </div>
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
    color: #6B944F;
    font-size: 2em;
    font-weight:900;
}

#id{
    color: #6B944F;
    margin-top: 0.4em;
    font-size: 1.2em;
    align-content: center;
}

#team,#ip,#le_sec{
    color: #6B944F;
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
.ce_ar__mi_headline{
    color: #6B944F;
    font-size: 2em;
    display: flex;
    justify-content: center;
    margin-bottom: 50px;
}

.ce_ar__mi_cont_text{
    color: #6B944F;
    font-size: 1.2em;
    text-indent: 2em;
    line-height: 1.5em;
    letter-spacing: 1px;
}

.ce_ar__mi_cont_pic{
    width: 100%;
    height: 400px;
    margin-top: 30px;
    object-fit: contain;
}

.ce_ar__mi_cont_vid{
    width: 100%;
    height: 400px;
    margin-top: 30px;
    object-fit: contain;
}

.ce_ar__mi_cont_aud{
    width: 100%;
    margin-top: 30px;
    object-fit:contain;
}
</style>