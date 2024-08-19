<script setup>
    import { onMounted } from 'vue';

    onMounted(() => {
        let fileInput = document.getElementById('a_in_test');
        let preview = document.getElementById('b_in_test');

        fileInput.addEventListener('change',function(event){
            const file = event.target.files[0];
            console.log("读进去了！")
            if(file){
                const reader = new FileReader();
                reader.onload = function(e){
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

    <h2>上传视频并预览</h2>
    
    <input type="file" id="a_in_test" accept="video/">
    <br><br>
    <video id='b_in_test' src="" style="max-width: 1000px;max-height: 1000px" controls>
    </video>

</template>

<style scoped>
</style>
