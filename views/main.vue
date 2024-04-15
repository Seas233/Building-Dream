<script setup>
</script>

<template>

    <div id="main_1"></div>

    <div style="height: 100px;"></div>

    <div id="main_2">视频推荐
        <div id="main_2_1"></div>
    </div>

    <div style="height: 100px;"></div>

    <div id="main_3">
        <div>
            <div style="height: 10vw;"></div>
            <div class="main_3_1" id="main_3_1_1"></div>
            <div style="height: 10px;"></div>
            <div class="main_3_1" id="main_3_1_2"></div>
        </div>
        <div></div>
        <div>
            <div class="main_3_1" id="main_3_1_3"></div>
            <div style="height: 10px;"></div>
            <div class="main_3_1" id="main_3_1_4"></div>
        </div>
        <div></div>
        <div>
            <div style="height: 10vw;"></div>
            <div class="main_3_1" id="main_3_1_5"></div>
            <div style="height: 10px;"></div>
            <div class="main_3_1" id="main_3_1_6"></div>
        </div>
        <div></div>
        <div>
            <div class="main_3_1" id="main_3_1_7"></div>
            <div style="height: 10px;"></div>
            <div class="main_3_1" id="main_3_1_8"></div>
        </div>
        <div></div>
        <div>
            <div style="height: 10vw;"></div>
            <div class="main_3_1" id="main_3_1_9"></div>
            <div style="height: 10px;"></div>
            <div class="main_3_1" id="main_3_1_10"></div>
        </div>
    </div>

    <div style="height: 200vh;"></div>
</template>

<style scoped>
#main_1{
    background-image: url("../public/background_1.png");
    background-size: cover;
    width: 100%;
    height: 80vh;
    background-position: center center;
    background-repeat: no-repeat;
    overflow: hidden;
}

#main_2{
    color: rgba(130, 213, 38, 1);
    /*font-family: Inter;*/
    font-size: 60px;
    font-weight: 600;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: visible;
}

#main_2_1{
    background-image: url("../public/underline_1.png");
    background-size: contain;
    width: 154.63px;
    height: 40px;
    position: absolute;
    top: 45px;
    z-index: 100;
}

#main_3{
    display: grid;
    grid-template-columns: 1fr 10px 1fr 10px 1fr 10px 1fr 10px 1fr;
    width: 100vw;
}

.main_3_1{
    width: 100%;
    height: 28vw;
    background-size: contain;

    background-size:cover;
    background-position: center;

    border-radius: 2vw;
}

#main_3_1_1{
    background-image: url("../public/video recomamdation/p1.png");
}

#main_3_1_2{
    background-image: url("../public/video recomamdation/p6.jpg");
}

#main_3_1_3{
    background-image: url("../public/video recomamdation/p10.png");
}

#main_3_1_4{
    background-image: url("../public/video recomamdation/p5.png");
}

#main_3_1_5{
    background-image: url("../public/video recomamdation/p9.png");
}

#main_3_1_6{
    background-image: url("../public/video recomamdation/p4.png");
}

#main_3_1_7{
    background-image: url("../public/video recomamdation/p8.jpg");
}

#main_3_1_8{
    background-image: url("../public/video recomamdation/p3.png");
}

#main_3_1_9{
    background-image: url("../public/video recomamdation/p7.png");
}

#main_3_1_10{
    background-image: url("../public/video recomamdation/p2.png");
}
</style>
