<script setup>
    import { useRouter } from 'vue-router';
    import { defineEmits } from 'vue';

    const router = useRouter();

    const emit = defineEmits(['change_info','create_team']);

    const props = defineProps({
        user:{
            type: Object,
            default: ""
        },
        teamlist:{
            type:Object
        }
    })
</script>

<template>
    <div id="le_top">
        <div id="profile_picture">
            <div id="change_pic"></div>
        </div>

        <div style="margin-left: 15%;display: grid;">
            <div id="name">{{ props.user["name"] }}</div>
            <div id="id">id: {{ props.user["id"] }}</div>
        </div>
    </div>

    <div id="le_sec">个性签名：{{ props.user["personal_sign"] }}</div>

    <div style="display: flex;">
        <div id="school">{{ props.user["school"] }}</div>
        <div></div>
    </div>

    
    <div id="le_team">
        <div class="le_team_i" v-for="i in props.teamlist" @click="router.push({path: '/team', query: {team_id: i['id'] }})">{{ i["name"] }}</div>
    </div>

    <div id="line"></div>

    <div id="le_si">
        <div @click="emit('change_info')">修改资料</div>
        <div @click="emit('create_team')">新建队伍</div>
    </div>
</template>

<style scoped>
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
    background-image: url("/更改头像.png");
    background-size: cover;
    align-content: center;
}

#name{
    color: #6B944F;
    font-size: 2em;
    font-weight:900;
    align-content: center;
}

#id{
    color: #6B944F;
    margin-top: 0.4em;
    font-size: 1.2em;
    align-content: center;
}

#le_sec{
    padding-top: 30px;
    padding-bottom: 30px;
    color: #A6E67B;
    margin-top: 0.4em;
    font-size: 1.5em;
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

#line{
    border: #A6E67B 1px solid;
    width: 100%;
    margin-bottom: 30px;
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
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 30px;
    margin-top: 30px;
    margin-bottom: 30px;
}

#le_si>*{
    background-color: #b3f0a2;
    border-radius: 1em;
    height: 2em;

    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 1.5em;
    color: white;
}
</style>
