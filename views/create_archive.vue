<script setup>
    import axios from 'axios';
    import { onMounted,ref, watch,reactive } from 'vue';
    import setting from "../src/components/setting.vue";
    import { useRouter } from 'vue-router';

    let apiUrl = 'http://localhost:8000';

    const router = useRouter();

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

    let user = {
        name:"爱丽丝",
        team:7355608,
        ip:"千年",
        personal_sign:"爱丽丝错了爱丽丝不该在网上口嗨的",
        school:"千年科技学院",
    }
    let if_setting_open = ref(false);
    let type = ref("title");
    let ri_fun_on = ref(true);

    let sum = reactive([]);
    
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
            //i_ele.src = sum[i]["file"];URL.createObjectURL(file)
            i_ele.src = URL.createObjectURL(sum[i]["file"]);
            i_ele.width = "100%";
            i_ele.className = "ce_ar__mi_cont_pic";
            mi_content.value.appendChild(i_ele);
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
    {///paper/abcd/papers/
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
            });
    }
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

            <div id="le_si">
                <div id="le_si_2">修改资料</div>
                <div id="le_si_1" @click="if_setting_open = true;"></div>
            </div>
        </div>

        <div id="mi">
            <div id="mi_content" ref="mi_content">
                <!--<div id="mi_headline">{{ sum[0]["content"] }}</div>-->
            </div>

            <div class="mi_1">
                <div id="send_buttom" @click="send_paper"></div>
                <div id="append_buttom" @click="ri_fun_on = true"></div>
            </div>
        </div>

        <div></div>

        <div id="ri">
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