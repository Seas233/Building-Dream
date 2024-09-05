<script setup>
    import { useRouter } from 'vue-router';
    import { onMounted,ref,watch } from 'vue';

    const router = useRouter();

    const props = defineProps({
        member_list:{
            type: Object
        },
        team_info:{
            type: Object
        },
        stay:{
            type: Boolean,
            default: false
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
</script>

<template>
    <div id="le_top">{{ props.team_info["name"] }}</div>

    <div id="le_sec">队伍描述：{{ props.team_info["describe"] }}</div>

    <div style="display: flex;">
        <div id="school">{{ props.team_info["school"] }}</div>
        <div></div>
    </div>

    <div id="line"></div>

    <!--队员信息-->
    <div id="le_member">
        <div class="le_member_i" v-for="(i, index) in props.member_list"
        @click="() => {if(!props.stay){router.push({path: '/user', query: {user_id: i['id'] }})}}"
        :key="index">
            <div v-if="index === 0">
                <div class="mem_profile_picture"></div>

                <div style="margin-left: 15%;display: grid;">
                    <div class="mem_name">队长 {{ i["name"] }}</div>
                    <div class="mem_id">id: {{ i["id"] }}</div>
                </div>
            </div>
            <div v-else>
                <div class="mem_profile_picture"></div>

                <div style="margin-left: 15%;display: grid;">
                    <div class="mem_name">{{ i["name"] }}</div>
                    <div class="mem_id">id: {{ i["id"] }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
#le_top{
    margin-top: 30px;
    color: #6B944F;
    font-size: 2em;
    font-weight:900;
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

.le_member_i>*{    
    display: grid;
    grid-template-columns: 1fr 3fr;

    margin-bottom: 30px;
}

.mem_profile_picture{
    background-image: url("/测试头像.jpg");
    background-size: cover;
    border-radius: 50%; 
    border: 3px solid white;
    position: relative;
}

.mem_name{
    color: #6B944F;
    font-size: 1.8em;
    font-weight:900;
    align-content: center;
}

.mem_id{
    color: #6B944F;
    margin-top: 0.4em;
    font-size: 1.2em;
    align-content: center;
}
</style>
