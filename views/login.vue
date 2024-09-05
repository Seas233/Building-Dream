<script setup>
    import axios from 'axios';
    import { ref } from 'vue';
    import { useRouter } from 'vue-router';

    let apiUrl = 'http://127.0.0.1:8000';
    let time_count = 0;
    let condition = ref("login");

    let yuka = '';

    let router = useRouter();

    async function verify()
    {
        if(time_count + 30 * 1000 > Date.now())
        {
            console.log("请等待" + Math.trunc((time_count + 30 * 1000 - Date.now()) / 1000) + "秒再发送验证码")
        }
        else
        {
            time_count = Date.now();
            let yuka_ele = document.getElementById("yuka");
            yuka = yuka_ele.value;
            /*{params: {"email": yuka}}*/
            axios.post(apiUrl + "/user/login-signup/send-email",{"email": yuka})
                .then(function (response) {
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    }

    function rejister()
    {
        if(true)
        {
            condition.value = "rejister";
        }
    }

    function sure_rejister()
    {
        let res = {
            "username": document.getElementById("name").value,
            "password": "string",
            "email": yuka,
            "captcha": "string"
        };
        console.log(res);
        axios.post(apiUrl + "/user/login-signup/sign-up",res)
            .then(function (response){
                alert('账户已经注册，将返回登录页！');
            })
            .catch(function (error){
                console.log(error);
            })
    }

    function login()
    {
        
        axios.post(apiUrl + "/token",)
            .then(function (response){
                //console.log(response);
                router.push('/user/' + response)
            })
            .catch(function (error){
                console.log(error);
            })
    }
</script>

<template>
    <div id="lo">
        <div id="lo_ui">
            <div v-if="condition == 'login'">
                <div id="lo_ui_head">登录</div>

                <div id="lo_ui_input">
                    <div id="input_1">
                        <div>邮  箱</div>
                        <div style="margin-top: 1.5em;">验 证 码</div>
                    </div>
                    <div id="input_2"></div>
                    <div id="input_3">
                        <input type="text" name="" id="yuka">
                        <input type="text" name="" id="password" style="margin-top: 1.5em;">
                    </div>
                </div>

                <div id="lo_ui_but">
                    <div @click="verify">验证</div>
                    <div @click="rejister" style="margin-left: 1.5em;">注册</div>
                    <div @click="login" style="margin-left: 1.5em;">登录</div>
                </div>
            </div>

            <div v-if="condition == 'rejister'">
                <div id="lo_ui_head">完善个人信息</div>

                <div id="lo_ui_input">
                    <div id="input_1">
                        <div>姓  名</div>
                        <div style="margin-top: 1.5em;">密  码</div>
                    </div>
                    <div id="input_2"></div>
                    <div id="input_3">
                        <input type="text" name="" id="name">
                        <input type="text" name="" id="password" style="margin-top: 1.5em;">
                    </div>
                </div>

                <div id="lo_ui_but">
                    <div @click="sure_rejister">确认</div>
                </div>
            </div>
        </div> 

        <div id="lo_ele">
            <div id="lo_ele_1">
                <div id="lo_ele_2"></div>
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
    flex-direction: row-reverse;
    align-items: center;
}

#lo_ui>*{
    margin-right: 100px;
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

#input_3>*{
    font-size: 2em;
    color: black;
    background-color: white;
    height: 2em;
    width: 11em;
    padding-left: 1rem;
    padding-right: 1rem;
}

#lo_ui_but{
    display: flex;
    margin-bottom: 2em;
}

#lo_ui_but>*{
    width: 3em;
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

#lo_ele
{
    position: absolute;
    left: 0px;
    width: 100%;
    height: 100%;
    overflow: hidden;
    display: flex;
    flex-direction: column-reverse;
}

#lo_ele_1{
    margin-left: 100px;
    margin-bottom: 20px;
    height: 80%;
    background-image: url("/login_bac_white_pep.png");
    background-size: contain;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column-reverse;
}

#lo_ele_2{
    height: 50%;
    background-image: url("/login_bac_green_pep.png");
    background-size: contain;
    background-repeat: no-repeat;
}
</style>
