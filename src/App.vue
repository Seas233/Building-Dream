<script setup>
import {ref,computed} from "vue";
import { useRouter } from 'vue-router';

const router = useRouter()

const goto_test = () => {
    router.push('/test')
}
</script>

<template>
    <div id="app_a" @click="goto_test"></div>
    <router-view></router-view>
</template>

<style scoped>
#app_a{
    width: 100px;
    height: 100px;
    background-color: black;
}
</style>
