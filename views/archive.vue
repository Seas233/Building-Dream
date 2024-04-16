<script setup>
import {ref} from "vue";
let coin = ref(114514)
let archive_number=ref(1)
</script>

<template>
    <div style="height: 100px;"></div>

    <div id="head">
        <div id="per_2">个人档案室
            <div id="per_2_1"></div>
        </div>
        <div id="head_ri">
            <div id="head_ri_2">
                <div id="head_ri_2_1"></div>
                <div id="head_ri_2_2">{{ coin }}</div>
            </div>
            <div id="head_ri_1"></div>
        </div>
    </div>
    <div style="height: 100px;"></div>

    <div id="per_3">
        <div id="per_3_1"></div>
        <div id="per_3_2">
            <div id="per_3_2_back"></div>
            <div id="per_3_2_back_number">{{ archive_number }}</div>
            <div id="per_3_2_container">
                <div id="per_3_2_file">
                    <div>
                        <span>应对气候变化</span>
                    </div>
                </div>
                <div id="per_3_2_file">
                    <div>
                        <span>应对气候变化</span>
                    </div>
                </div>
                <div id="per_3_2_file">
                    <div>
                        <span>应对气候变化</span>
                    </div>
                </div>
            </div>

        </div>
    </div>

</template>

<style scoped>
#head{
    position: relative;
    display: flex;
    width: 100vw;
    height: 70px;
    align-items: center;
}

#per_2{
    width: 100vw;
    color: rgba(130, 213, 38, 1);
    /*font-family: Inter;*/
    font-size: 60px;
    font-weight: 600;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    overflow: visible;
}

#per_2_1{
    background-image: url("../public/underline_1.png");
    background-size: contain;
    width: 154.63px;
    height: 40px;
    position: absolute;
    top: 45px;
    z-index: 100;
}

#head_ri{
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: flex-end;
}

#head_ri_1{
    background-image: url("../public/设置.png");
    height: 60px;
    width: 60px;
    background-size: contain;
    background-position: center center;
    background-repeat: no-repeat;
    margin-right: 60px;
    margin-left: 60px;
}

#head_ri_2{
    height: 60px;
    width: 300px;
    border-radius: 30px;
    background-color: rgba(213, 239, 128, 1);
    display: flex;
    align-items: center;
}

#head_ri_2_1{
    height: 50px;
    width: 50px;
    margin-left: 10px;
    background-image: url("../public/钱币.png");
    background-position: center center;
    background-repeat: no-repeat;
    background-size: 100px;
    overflow: hidden;
    margin-right: 10px;
}

#head_ri_2_2{
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    /*font-family: Inter;*/
    font-size: 45px;
    font-weight: 600;
    line-height: 60px;
}

#per_3{
    width: 100vw;
    height: 100vh;
    display: grid;
    grid-template-columns: 15% 85% ;
}

#per_3_1{
    width: 100%;
    height: 100%;
    background-color: rgba(213, 239, 128, 1);
    border-radius: 0 2vw 2vw 0;
}

#per_3_2{
    position: relative;
}


#per_3_2_container{
    width: 85vw;
    height: 60vh;
    margin-right: 1vw;
    display: flex;
    position: absolute;
    top:10%;
}

#per_3_2_file{
    width: 20vw;
    height: 60vh;
    margin: 0 4vw;
    background: url('/public/video recommendation/p4.png');
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 2vw;
}

#per_3_2_file>div{
    width: inherit;
    height: 30%;
    background: linear-gradient(0.13deg, #005FAE 0.07%, rgba(0, 95, 174, 0.64) 55.64%, rgba(0, 95, 174, 0) 91.64%);
    position: absolute;
    bottom: 0;
    border-radius: 2vw;
}

#per_3_2_file>div>span{
    width: 100%;
    height: 2vh;
    font-family: Inter;
    font-size: 3vh;
    font-weight: 700;
    line-height: 3vh;
    text-align: left;
    color:#FFFFFF;
    position: absolute;
    bottom: 5vh;
    left: 2vw;
;

}

#per_3_2_back{
    width: 100%;
    height: 52%;
    margin: 12% 0;
    background-color: rgba(213, 239, 128, 1) ;
    z-index: -2;
    position: absolute;
    top:10%
}

#per_3_2_back_number{
    color: #FFFFFF;
    font-family: Inter;
    font-size: 12vh;
    font-style: italic;
    font-weight: 900;
    line-height: 12vh;
    text-align: left;
    position: absolute;
    right: 2vw;
    top: 68vh;
}

</style>