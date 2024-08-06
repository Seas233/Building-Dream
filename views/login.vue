<script setup>
import { dividerProps } from 'element-plus';

</script>

<template>
    <div id="lo">
        <div id="lo_ui">
            <div>
                <div id="lo_ui_head">注册</div>

                <div id="lo_ui_input">
                    <div id="input_1">
                        <div>邮  箱</div>
                        <div style="margin-top: 1.5em;">验 证 码</div>
                    </div>
                    <div id="input_2"></div>
                    <div id="input_3">
                        <input type="text" name="" id="">
                        <input type="text" name="" id="" style="margin-top: 1.5em;">
                    </div>
                </div>

                <div id="lo_ui_but">
                    <div>验证</div>
                    <div style="margin-left: 1.5em;">确认</div>
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
    background-image: url("../public/login_bac.png");
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
    background-image: url("../public/login_bac_white_pep.png");
    background-size: contain;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column-reverse;
}

#lo_ele_2{
    height: 50%;
    background-image: url("../public/login_bac_green_pep.png");
    background-size: contain;
    background-repeat: no-repeat;
}
</style>
