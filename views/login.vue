<script setup>
    import axios from 'axios';
    import { ref, onUnmounted, defineEmits } from 'vue';
    import { useRouter } from 'vue-router';

    let router = useRouter();
    const emit = defineEmits(['cancel'])

    const props = defineProps({
        apiUrl:{
            type: String,
            default: ""
        },
    })

    //-----------------------------

    const buttonText = ref('验证');
    const isCounting = ref(false);
    let countdownTimer = null;

    // 清理定时器以防内存泄漏
    onUnmounted(() => {
    if (countdownTimer) {
        clearInterval(countdownTimer);
    }
    });

    //------------------------

    let condition = ref("login");
    let yuuka,password,v_code,v_code2 = 0,password2;
    let buttonColor = ref('#A6E67B');

    function sure_login()
    {
        
        let back = axios.post(url = apiUrl + "/token",)
            .then(function (response){
                //console.log(response);
                router.push('/user/' + response)
            })
            .catch(function (error){
                console.log(error);
            })
        this.$emit('event-name', param);
    }

    function send_v_code()
    {
        if (isCounting.value) return; // 避免重复点击

        //此处获取验证码
        v_code2 = axios.post(props.apiUrl + '/user/login-signup/send-email',
        {
            "email": yuuka
        });

        isCounting.value = true;
        let countdown = 30;
        buttonText.value = countdown;

        countdownTimer = setInterval(() => {
            countdown--;
            buttonText.value = countdown;

            if (countdown <= 0)
            {
                clearInterval(countdownTimer);
                isCounting.value = false;
                buttonText.value = '发送';
                buttonColor.value = '#A6E67B'
            }
        }, 1000);
    }

    function sure_rejister()
    {
        if(v_code != v_code2)
        {
            
        }
        condition.value = 'change_password';
    }
</script>

<template>
    <div id="lo">
        <div id="lo_ui">
            <div v-if="condition == 'login'">
                <div id="lo_ui_head">登录</div>

                <div id="lo_ui_input">
                    <div id="input_1">
                        <div>邮箱</div>
                        <div style="margin-top: 1.5em;">密码</div>
                    </div>
                    <div id="input_2"></div>
                    <div id="input_3">
                        <input type="email" name="" id="yuuka" v-model="yuuka">
                        <input type="password" name="" id="password" v-model="password" style="margin-top: 1.5em;">
                    </div>
                </div>

                <div id="lo_ui_but">
                    <div @click="condition = 'rejister'">注册</div>
                    <div @click="condition = 'forget'" style="margin-left: 1.5em;">忘记密码</div>
                    <div @click="sure_login" style="margin-left: 1.5em;">登录</div>
                </div>
            </div>

            <div v-if="condition == 'rejister'">
                <div id="lo_ui_head">注册</div>

                <div id="lo_ui_input">
                    <div id="input_1">
                        <div>邮箱</div>
                        <div style="margin-top: 1.5em;">验证码</div>
                    </div>
                    <div id="input_2"></div>
                    <div id="input_3">
                        <input type="eamil" name="" id="yuuka" v-model="yuuka">

                        <div id="v_code_box">
                            <input type="text" name="" id="v_code" v-model="v_code">
                            <div></div>
                            <div @click="send_v_code" id="v_code_button" :style="{'background-color' : buttonColor}">{{ buttonText }}</div>
                        </div>
                    </div>
                </div>

                <div id="lo_ui_but">
                    <div @click="sure_rejister">注册</div>
                </div>
            </div>

            <div v-if="condition == 'forget'">
                <div id="lo_ui_head">忘记密码</div>

                <div id="lo_ui_input">
                    <div id="input_1">
                        <div>邮箱</div>
                        <div style="margin-top: 1.5em;">验证码</div>
                    </div>
                    <div id="input_2"></div>
                    <div id="input_3">
                        <input type="email" name="" id="yuuka">

                        <div id="v_code_box">
                            <input type="text" name="" id="v_code" v-model="v_code">
                            <div></div>
                            <div @click="send_v_code" id="v_code_button" :style="{'background-color' : buttonColor}">{{ buttonText }}</div>
                        </div>
                    </div>
                </div>

                <div id="lo_ui_but">
                    <div @click="sure_change">验证</div>
                </div>
            </div>

            <div v-if="condition == 'change_password'">
                <div id="lo_ui_head">设置密码</div>

                <div id="lo_ui_input">
                    <div id="input_1">
                        <div>密码</div>
                        <div style="margin-top: 1.5em;">确认密码</div>
                    </div>
                    <div id="input_2"></div>
                    <div id="input_3">
                        <input type="password" name="" id="password" v-model="password">
                        <input type="password" name="" id="password2" v-model="password2" style="margin-top: 1.5em;">
                    </div>
                </div>

                <div id="lo_ui_but">
                    <div @click="">修改</div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
#lo{
    width: 100%;
    height: 100vh;
    background-image: url("/login_bac.png");
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
}

#lo_ui
{
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 1000;
    display: flex;
    justify-content: center;
    align-items: center;
}

#lo_ui>*{
    background-color: rgba(256,256,256,0.6);
    display: flex;
    flex-direction: column;
    align-items: center;
}

#lo_ui_head{
    margin-top: 1em;
    font-size: 2em;
    color: #A6E67B;
}

#lo_ui_input{
    margin: 2em;
    display: flex;
    align-items: center;
}

#input_1>*{
    font-size: 2em;
    color: white;
    background-color: #A6E67B;
    height: 2em;
    width: 6em;

    display: flex;
    justify-content: center;
    align-items: center;
}

#input_2{
    margin-left: 3em;
    margin-right: 3em;
    width: 2px;
    height: 11em;
    background-color: #A6E67B;
}

#input_3{
    display: flex;
    flex-direction: column;
}

#v_code_box{
    display: grid;
    grid-template-columns: 7fr 1fr 3fr;
    margin-top: 3em;
}

#v_code_button{
    background-color: #A6E67B;
    
    display: flex;
    justify-content: center;
    align-items: center;

    width: 3em;
    font-size: 2em;

    color: white;
}

#input_3>input{
    font-size: 2em;
    color: black;
    background-color: white;
    height: 2em;
    width: 11em;
    padding-left: 1rem;
    padding-right: 1rem;
}

#v_code{
    font-size: 2em;
    color: black;
    background-color: white;
    height: 2em;
    width: 7em;
    padding-left: 1rem;
    padding-right: 1rem;
}

#lo_ui_but{
    display: flex;
    margin-bottom: 2em;
}

#lo_ui_but>*{
    width: 6em;
    height: 2em;

    font-size: 1.5em;
    color: #A6E67B;

    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 2px;
}

#lo_ui_but>*:hover{
    color: white;
    background-color: #A6E67B;
}
</style>
