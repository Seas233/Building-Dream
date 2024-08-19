<script setup>
</script>

<template>
    
    <div id="lo_ele">
        <div id="lo_ele_1"></div>
        <div id="lo_ele_2"></div>
    </div>
</template>

<style scoped>
#lo_ele
{
    overflow: hidden;
    display: flex;
    flex-direction: column-reverse;
    align-items: center;

    width: 100%;
    height: 100vh;
    background-image: url("/login_bac.png");
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
}

#lo_ele_1{
    margin-bottom: 20px;
    height: 80%;
    width: 100%;
    position: absolute;
    background-image: url("/login_bac_white_pep.png");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
}

#lo_ele_2{
    margin-bottom: 20px;
    height: 40%;
    width: 100%;
    position: absolute;
    background-image: url("/login_bac_green_pep.png");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
}
</style>
