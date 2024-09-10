<script setup>
    import { stringifyQuery, useRouter } from 'vue-router';
    import { defineEmits } from 'vue';

    const router = useRouter();
    const emit = defineEmits(['cancel'])

    const props = defineProps({
        user:{
            type: Object,
            default: ""
        },
    })

    let user = props.user;

    async function load_pic(){
        let fileInput = document.getElementById('pic');
        let preview = document.getElementById('pic_preview');
        const file = fileInput.files[0];
        preview.src = URL.createObjectURL(file);
    }

    function sure_change()
    {
        //将推送发给后端
    }
</script>

<template>
    <div id="ri">
        <div id="ri_head">修改资料</div>

        <div class="ri_i">
            <div class="ri_le">头像</div>

            <div>
                <input type="file" accept="image/*" @change="load_pic" id="pic">
                <img id="pic_preview" alt="" width="100px" height="100px">
            </div>
        </div>

        <div class="ri_i">
            <div class="ri_le">昵称</div>
            <input type="text" v-model="user['name']" class="ri_ri_1">
        </div>

        <div class="ri_i">
            <div class="ri_le">学校</div>
            <input type="text" v-model="user['school']" class="ri_ri_1">
        </div>

        <div class="ri_i">
            <div class="ri_le"><div>个性<p></p>签名</div></div>
            <textarea class="ri_ri_1" v-model="user['personal_sign']"></textarea>
        </div>

        <div id="ri_bo">
            <div @click="$emit('cancel')">取消</div>
            <div @click='sure_change'>确认</div>
        </div>
    </div>
</template>

<style scoped>
#ri_head{
    font-size: 2em;
    color: #6B944F;
    font-weight: 900;
}

#ri{
    background-color: rgba(255,255,255,0.43);
}

#ri>*{
    margin-bottom: 30px;
    padding-left: 30px;
    padding-right: 30px;
}

#ri_head{
    text-align: center;
    font-size: 2em;
    color: #6B944F;
    font-weight: 900;
    margin-top: 30px;
}

.ri_i{
    display: grid;
    grid-template-columns: 7em 1fr;
    column-gap: 5px;
}

.ri_le{
    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 1.5em;
    color: #6B944F;
}

.ri_ri_1{
    font-size: 1.5em;
    padding: 10px;
}

.ri_i>textarea{
    height: 4em;
    font-family: '思源黑体';
}

#pic_review{
    width: 100px;
    height: 100px;
    object-fit: cover;
    overflow: hidden;
}

#pic{
    margin-bottom: 15px;
}

#ri_bo{
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 30px;
    margin-top: 30px;
    margin-bottom: 30px;
}

#ri_bo>*{
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
