<!--<template>
    <div style="height: 150px;"></div>

    <div ref="container" id="aaa" @click="go"></div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  
  // 创建一个引用，用于操作 DOM
  const container = ref(null);
  
  onMounted(() => {
    // 使用 createElement 创建一个 div
    const newElement = document.createElement('div');
    
    // 添加 class
    newElement.className = 'my-class'; // 将 class 应用到新元素
    newElement.textContent = '这是一个新元素'; // 添加文本内容
    
    // 将新元素添加到 container 中
    container.value.appendChild(newElement);
  });/**/
  function go(){
    
    // 使用 createElement 创建一个 div
    const newElement = document.createElement('div');
    
    // 添加 class
    newElement.className = 'my-class'; // 将 class 应用到新元素
    newElement.textContent = '这是一个新元素'; // 添加文本内容
    
    // 将新元素添加到 container 中
    container.value.appendChild(newElement);
  }
  </script>
  
  <style scoped>
  #aaa{
    width: 100px;
    height: 100px;
    background-color: aquamarine;
  }

  .my-class {
    background-color: lightblue; /* 背景色 */
    color: darkblue;            /* 字体颜色 */
    padding: 10px;             /* 内边距 */
    border-radius: 5px;        /* 边框圆角 */
    font-size: 16px;           /* 字体大小 */
    text-align: center;        /* 文本居中 */
  }
  </style>
  -->





  <template>
    <div style="height: 150px;"></div>
  <div @click="createElement">点击这里创建元素</div>
  <div ref="container"></div>
</template>

<script setup>
import { ref } from 'vue';

// 创建一个引用，用于操作 DOM
const container = ref(null);

const createElement = () => {
  // 使用 createElement 创建一个 div
  const newElement = document.createElement('div');
  
  // 添加 class
  newElement.className = 'my-class'; // 将 class 应用到新元素
  newElement.textContent = '这是一个新元素'; // 添加文本内容
  
  // 将新元素添加到 container 中
  container.value.appendChild(newElement);
};
</script>

<style scoped>
.my-class {
  background-color: lightblue; /* 背景色 */
  color: darkblue;            /* 字体颜色 */
  padding: 10px;             /* 内边距 */
  border-radius: 5px;        /* 边框圆角 */
  font-size: 16px;           /* 字体大小 */
  text-align: center;        /* 文本居中 */
}
</style>
  