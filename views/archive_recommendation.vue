<script setup>
</script>

<template>
    <div id="bac"></div>
    
    <div style="height: 150px;"></div>

    <div id="lo">
        <div></div>
        <div></div>

        <div id="mi">
            <div></div>
        </div>

        <div></div>
        <div></div>
    </div>
</template>

<style scoped>
#bac{
    position: fixed;
    background-image: url("../public/login_bac.png");
    width: 100vw;
    height: 100vw;
    background-repeat:no-repeat;
    background-size:cover;
    z-index: -10;
}

#lo{
    width: 100%;
    position: relative;
    display: grid;
    grid-template-columns: 10fr 30px 21fr 30px 10fr;
}

#mi{
    background-color: rgba(255,255,255,0.43);
    padding: 100px;
    overflow: auto;
}
</style>
