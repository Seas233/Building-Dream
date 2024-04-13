<script setup>
</script>

<template>

    <div id="main_1"></div>

    <div style="height: 200px;"></div>

    <div id="main_2">视频推荐
        <div id="main_2_1"></div>
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
</style>
