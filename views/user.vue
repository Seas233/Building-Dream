<script setup>
    import { onMounted,ref, watch } from 'vue';
    import setting from "../src/components/setting.vue";
    import { useRouter } from 'vue-router';

    const router = useRouter()

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
        likes_sum:100,
        follow:100,
        fans:100,
    }
    let if_setting_open = ref(false);

    const items = ref([
    { id: 1, content: 'Item 1' },
    { id: 2, content: 'Item 2' },
    { id: 3, content: 'Item 3' },
    { id: 4, content: 'Item 4' },
    { id: 5, content: 'Item 5' },
    { id: 6, content: 'Item 6' },
    { id: 7, content: 'Item 7' },
    { id: 8, content: 'Item 8' },
    { id: 9, content: 'Item 9' },
    { id: 10, content: 'Item 10' }
    ])
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
                    <div id="team">支教队伍:{{ user["team"] }}</div>
                    <div id="ip">ip属地:{{ user["ip"] }}</div>
                </div>
            </div>

            <div id="le_sec">个性签名：{{ user["personal_sign"] }}</div>

            <div style="display: flex;">
                <div id="school">{{ user["school"] }}</div><div></div>
            </div>

            <div id="le_th">
                <div>
                    <div>{{ user["follow"] }}</div>
                    <p></p>
                    关注
                </div>

                <div>
                    <div>{{ user["fans"] }}</div>
                    粉丝
                </div>

                <div>
                    <div>{{ user["follow"] }}</div>
                    获赞
                </div>
            </div>

            <div id="le_fo"></div>
            <div id="le_fi"></div>

            <div id="le_si">
                <div id="le_si_2">修改资料</div>
                <div id="le_si_1" @click="if_setting_open = true;"></div>
            </div>
        </div>

        <div id="mi">
            <div>
                <div id="mi_head">个人灯塔</div>
                <div id="mi_body">
                    <!--<div v-for="item in items"></div>-->
                    <div v-for="item in items" :key="item.id" :id="`item_${item.id}`">
                        {{ item.content }}
                    </div>
                    <!--此处有待修改-->
                </div>
            </div>
            <div id="mi_pic" @click="router.push('/create_article')"></div>
        </div>

        <div id="ri">
            <div id="ri_pic_bac"></div>
            <div id="ri_pic">
            </div>
        </div>
    </div>
</template>

<style scoped>
#bac{
    position: fixed;
    background-image: url("../public/login_bac.png");
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
    grid-template-columns: 10fr 21fr 10fr;
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
    background-image: url("../public/头像.png");
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
    background-image: url("../public/更改头像.png");
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

#le_th{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    height: 4em;
}

#le_th>*{
    display: flex;
    flex-direction: column;
    align-items: center;

    color: #A6E67B;
    font-size: 1.2em;
}

#le_th>*>*{
    font-size: 1.5em;
    font-weight: 700;
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
    background-image: url("../public/设置_白.png");
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

#mi_body{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    grid-gap: 20px;
}

#mi_body>*{

    width: 100px;
    height: 100px;

    background-image: url("../public/light_on.png");
    background-repeat: no-repeat;
    background-size: contain;
    background-position: top;
}

#mi_pic{
    position: absolute;
    bottom: 0px;
    left: 0px;
    z-index: 10;

    background-image: url("../public/女1Q.png");
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
    background-image: url("../public/人物背景.png");
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
    background-image: url("../public/女1成.png");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center bottom;
    
    width: 40%;
    height: 100%;

    position: absolute;
    z-index: 3;
}
</style>