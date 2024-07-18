<script setup>
import axios from 'axios';
import { ref } from 'vue';
/*async function search_word()
  {
    let inputElement = document.getElementById("top1");
    entry = inputElement.value;

    const url = apiUrl + "/search/" + entry + "?dict_num=" + dict_num;
    let response;
    try{
      const response_ = await axios.get(url);
      response = response_.data.answer;
      if(response == "没查到哎宝宝")
      {
        //没查到
        console.log("没输出");
        cout = ref('<div style="font-size: 16px">没查到哎宝宝</div>');
      }
      else
      {
        console.log("有输出");
        cout = ref(response);

        console.log(is_menu_visable.value)
      }
    }
    catch (error) {
      console.error("error!!!");
    }
  }*/

let apiUrl = 'http://localhost:5174';
let type = ref("none");

let sum = [];

async function add_element()
{
    if(type.value == "text")
    {
        let inputElement = document.getElementById("top1");
        
        console.log(inputElement.value)

        let add = {
            type:"text",
            content:inputElement.value,
        };

        sum += add;
    }
    console.log(sum)
}

function send_paper()
{
    axios.post(apiUrl + "/add_paper",{
        "content": "ddsf",
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
    <div class="type_choice">
        <div id="type_text" :style="{ 'background-color' : type == 'text' ? '#FF0000' : '#00FF00'}" @click="type = 'text'"></div>
        <div id="type_pic" :style="{ 'background-color' : type == 'pic' ? '#FF0000' : '#00FF00'}" @click="type = 'pic'"></div>
        <div id="type_video" :style="{ 'background-color' : type == 'video' ? '#FF0000' : '#00FF00'}" @click="type = 'video'"></div>
        <div id="type_aideo" :style="{ 'background-color' : type == 'aideo' ? '#FF0000' : '#00FF00'}" @click="type = 'aideo'"></div>
    </div>

    <div :v-if="type == 'text'">
        <input type="text" id="top1">
    </div>

    <div @click="add_element" class="butt"></div>
    <div @click="send_paper" class="butt"></div>
</template>

<style scoped>
.type_choice{
    display: flex;
    justify-content: center;
}

.type_choice>*{
    width: 100px;
    height: 100px;
}

.butt{
    width: 100px;
    height: 100px;
    background-color: #000;
}

input{
    background-color: aqua;
}
</style>
