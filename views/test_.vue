<script setup>
    import { onMounted } from 'vue';

    onMounted(() => {
        let fileInput = document.getElementById('a_in_test');
        let preview = document.getElementById('b_in_test');

        fileInput.addEventListener('change',function(event){
            const file = event.target.files[0];
            if(file){
                const reader = new FileReader();
                reader.onload = function(e){
                    console.log(e.target.result)
                    preview.src = e.target.result;
                    preview.style.display = 'block';
                };
                reader.readAsDataURL(file)
            }
        });
    })
</script>

<template>
    <div style="height: 70px;"></div>

    <h2>上传图片并预览</h2>
    
    <input type="file" id="a_in_test" accept="image/">
    <br><br>
    <img id="b_in_test" src="" alt="图片预览"style="max-width:300px;max-height:300px;display:none;">

</template>

<style scoped>
</style>
