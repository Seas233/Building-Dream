<script setup>
import { reactive } from "vue";
import { onMounted } from 'vue';

let sum = reactive([
    {
        type:"headline"
    },
    {
        type:"text",
        content:"7月12日至14日，由国家最高科学技术奖获得者、中国工程院院士钱七虎等院士发起，中国岩石力学与工程学会、山东省科学技术厅指导，山东大学、山东高速集团有限公司主办的“首届基础设施工程·泰山论坛暨现代土木交通工程高质量发展科技论坛”在济南举行。",
    },
    {
        type:"text",
        content:"中国工程院院士钱七虎、欧进萍，中国科学院院士李惠，加拿大工程院院士Cyril Leung，新加坡工程院院士苗春燕，香港工程科学院院士、英国皇家工程院外籍院士吴宏伟，欧洲科学与艺术院院士袁勇；山东大学党委书记任友群，山东大学校长、中国工程院院士李术才，山东高速集团有限公司党委书记、董事长王其峰，国际隧道与地下空间协会前主席、中铁科学研究院有限公司首席专家严金秀，中国土木工程学会原秘书长、中国建设监理协会副会长兼秘书长李明安，山东省科学技术厅二级巡视员王钟伟，中国岩石力学与工程学会代理秘书长杨军出席论坛。",
    },
    {
        type:"video",
        link:"（地址）",
    },
    {
        type:"video",
        link:"（地址）",
    }
]);

onMounted(() => {

    let root = document.getElementById("root")

    for(let i = 0;i < 4;i++)
    {
        console.log(sum[i]["content"]);
        if(sum[i]["type"] == "text")
        {
            let sum_i = document.createElement("div");
            root.appendChild(sum_i);
            console.log(sum[i]["content"]);
            sum_i.innerHTML = sum[i]["content"];
            //sum_i.style = "hight: auto;font-size: " + sum[i]["fontsize"] + ";color:" + sum[i]["color"];
        }
    }

    /*let sum_ = reactive([]);
    for(let i = 0;i < 2;i++)
    {
        if("text" in sum[i])
        {
            sum_ += sum[i]["text"]["content"];
        }
    }
    console.log(sum_)*/
});
</script>

<template>
    <video src="" >

    </video>
    
    <div id="art_root">
        <div id="root" :v-for="sum_"></div>
    </div>
</template>

<style scoped>
#art_root{
    display: flex;
    justify-content: center;
    width: 100%;
    background-color: #DDD;
    padding: 100px;
}

#root{
    width: 1010px;
    padding: 100px;
    background-color: white;
}
</style>